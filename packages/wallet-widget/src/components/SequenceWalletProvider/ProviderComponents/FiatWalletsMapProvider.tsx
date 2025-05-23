import { compareAddress, useWallets } from '@0xsequence/connect'
import { useGetExchangeRate, useGetCoinPrices } from '@0xsequence/hooks'
import { useState, ReactNode, useEffect } from 'react'
import { zeroAddress, getAddress } from 'viem'

import { FiatWalletPair, FiatWalletsMapContextProvider } from '../../../contexts'
import { useGetAllTokensDetails, useSettings } from '../../../hooks'
import { computeBalanceFiat } from '../../../utils'

// Define the provider component
export const FiatWalletsMapProvider = ({ children }: { children: ReactNode }) => {
  const { wallets } = useWallets()
  const { selectedNetworks, hideUnlistedTokens, fiatCurrency } = useSettings()

  const [fiatWalletsMap, setFiatWalletsMap] = useState<FiatWalletPair[]>([])

  const { data: tokenBalancesData, isLoading: isTokenBalancesLoading } = useGetAllTokensDetails({
    accountAddresses: wallets.map(wallet => wallet.address),
    chainIds: selectedNetworks,
    hideUnlistedTokens
  })

  const coinBalancesUnordered =
    tokenBalancesData?.filter(b => b.contractType === 'ERC20' || compareAddress(b.contractAddress, zeroAddress)) || []

  const { data: coinPrices = [], isLoading: isCoinPricesLoading } = useGetCoinPrices(
    coinBalancesUnordered.map(token => ({
      chainId: token.chainId,
      contractAddress: token.contractAddress
    }))
  )

  const { data: conversionRate, isLoading: isConversionRateLoading } = useGetExchangeRate(fiatCurrency.symbol)

  useEffect(() => {
    if (
      !isTokenBalancesLoading &&
      !isCoinPricesLoading &&
      !isConversionRateLoading &&
      coinBalancesUnordered.length > 0 &&
      coinPrices.length > 0 &&
      conversionRate
    ) {
      const newFiatWalletsMap = wallets.map(wallet => {
        const walletBalances = coinBalancesUnordered.filter(b => getAddress(b.accountAddress) === getAddress(wallet.address))
        const walletFiatValue = walletBalances.reduce((acc, coin) => {
          return (
            acc +
            Number(
              computeBalanceFiat({
                balance: coin,
                prices: coinPrices,
                conversionRate,
                decimals: coin.contractInfo?.decimals || 18
              })
            )
          )
        }, 0)
        return {
          accountAddress: wallet.address,
          fiatValue: walletFiatValue.toFixed(2)
        } as FiatWalletPair
      })

      if (JSON.stringify(newFiatWalletsMap) !== JSON.stringify(fiatWalletsMap)) {
        setFiatWalletsMap(newFiatWalletsMap)
      }
    }
  }, [coinBalancesUnordered, coinPrices, conversionRate])

  return <FiatWalletsMapContextProvider value={{ fiatWalletsMap, setFiatWalletsMap }}>{children}</FiatWalletsMapContextProvider>
}
