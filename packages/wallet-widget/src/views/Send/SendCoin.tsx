import {
  compareAddress,
  getNativeTokenInfoByChainId,
  useAnalyticsContext,
  ExtendedConnector,
  truncateAtMiddle,
  useCheckWaasFeeOptions,
  useWaasFeeOptions,
  waitForTransactionReceipt,
  TRANSACTION_CONFIRMATIONS_DEFAULT,
  useWallets
} from '@0xsequence/connect'
import {
  Button,
  ChevronRightIcon,
  CopyIcon,
  CloseIcon,
  GradientAvatar,
  Text,
  NumericInput,
  TextInput,
  Spinner,
  Card,
  useToast
} from '@0xsequence/design-system'
import {
  useClearCachedBalances,
  useGetCoinPrices,
  useGetExchangeRate,
  useIndexerClient,
  useGetSingleTokenBalance
} from '@0xsequence/hooks'
import { TokenBalance } from '@0xsequence/indexer'
import { useState, ChangeEvent, useRef, useEffect } from 'react'
import { encodeFunctionData, formatUnits, parseUnits, toHex, zeroAddress, Hex } from 'viem'
import { useAccount, useChainId, useSwitchChain, useConfig, usePublicClient, useWalletClient } from 'wagmi'

import { WalletSelect } from '../../components/Select/WalletSelect'
import { SendItemInfo } from '../../components/SendItemInfo'
import { TransactionConfirmation } from '../../components/TransactionConfirmation'
import { ERC_20_ABI, HEADER_HEIGHT_WITH_LABEL } from '../../constants'
import { useNavigationContext } from '../../contexts/Navigation'
import { useSettings, useNavigation } from '../../hooks'
import { computeBalanceFiat, limitDecimals, isEthAddress } from '../../utils'

interface SendCoinProps {
  chainId: number
  contractAddress: string
}

export const SendCoin = ({ chainId, contractAddress }: SendCoinProps) => {
  const { clearCachedBalances } = useClearCachedBalances()
  const publicClient = usePublicClient({ chainId })
  const indexerClient = useIndexerClient(chainId)
  const toast = useToast()
  const { wallets } = useWallets()
  const { setNavigation } = useNavigation()
  const { setIsBackButtonEnabled } = useNavigationContext()
  const { analytics } = useAnalyticsContext()
  const { chains } = useConfig()
  const connectedChainId = useChainId()
  const { address: accountAddress = '', connector } = useAccount()
  const isConnectorSequenceBased = !!(connector as ExtendedConnector)?._wallet?.isSequenceBased
  const isConnectorWaas = !!(connector as ExtendedConnector)?.type?.includes('waas')
  const isCorrectChainId = connectedChainId === chainId
  const { switchChainAsync } = useSwitchChain()
  const amountInputRef = useRef<HTMLInputElement>(null)
  const { fiatCurrency } = useSettings()
  const [amount, setAmount] = useState<string>('0')
  const [toAddress, setToAddress] = useState<string>('')
  const { data: walletClient } = useWalletClient()
  const [isSendTxnPending, setIsSendTxnPending] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [feeOptions, setFeeOptions] = useState<
    | {
        options: any[]
        chainId: number
      }
    | undefined
  >()
  const [isCheckingFeeOptions, setIsCheckingFeeOptions] = useState(false)
  const [selectedFeeTokenAddress, setSelectedFeeTokenAddress] = useState<string | null>(null)
  const checkFeeOptions = useCheckWaasFeeOptions()
  const [pendingFeeOption, confirmFeeOption, _rejectFeeOption] = useWaasFeeOptions()

  const { data: tokenBalance, isLoading: isLoadingBalances } = useGetSingleTokenBalance({
    chainId,
    contractAddress,
    accountAddress
  })

  const nativeTokenInfo = getNativeTokenInfoByChainId(chainId, chains)
  const { data: coinPrices = [], isLoading: isLoadingCoinPrices } = useGetCoinPrices([
    {
      chainId,
      contractAddress
    }
  ])

  const { data: conversionRate = 1, isLoading: isLoadingConversionRate } = useGetExchangeRate(fiatCurrency.symbol)

  const isLoading = isLoadingBalances || isLoadingCoinPrices || isLoadingConversionRate

  // Handle fee option confirmation when pendingFeeOption is available
  useEffect(() => {
    if (pendingFeeOption && selectedFeeTokenAddress !== null) {
      confirmFeeOption(pendingFeeOption.id, selectedFeeTokenAddress)
    }
  }, [pendingFeeOption, selectedFeeTokenAddress])

  // Control back button when showing confirmation
  useEffect(() => {
    setIsBackButtonEnabled(!showConfirmation)
  }, [showConfirmation, setIsBackButtonEnabled])

  if (isLoading) {
    return null
  }

  const isNativeCoin = compareAddress(contractAddress, zeroAddress)
  const decimals = isNativeCoin ? nativeTokenInfo.decimals : tokenBalance?.contractInfo?.decimals || 18
  const name = isNativeCoin ? nativeTokenInfo.name : tokenBalance?.contractInfo?.name || ''
  const imageUrl = isNativeCoin ? nativeTokenInfo.logoURI : tokenBalance?.contractInfo?.logoURI
  const symbol = isNativeCoin ? nativeTokenInfo.symbol : tokenBalance?.contractInfo?.symbol || ''
  const amountToSendFormatted = amount === '' ? '0' : amount
  const amountRaw = parseUnits(amountToSendFormatted, decimals)

  const amountToSendFiat = computeBalanceFiat({
    balance: {
      ...(tokenBalance as TokenBalance),
      balance: amountRaw.toString()
    },
    prices: coinPrices,
    conversionRate,
    decimals
  })

  const insufficientFunds = amountRaw > BigInt(tokenBalance?.balance || '0')
  const isNonZeroAmount = amountRaw > 0n

  const handleChangeAmount = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target

    // Prevent value from having more decimals than the token supports
    const formattedValue = limitDecimals(value, decimals)

    setAmount(formattedValue)
  }

  const handleMax = () => {
    amountInputRef.current?.focus()
    const maxAmount = formatUnits(BigInt(tokenBalance?.balance || 0), decimals).toString()

    setAmount(maxAmount)
  }

  const handlePaste = async () => {
    const result = await navigator.clipboard.readText()
    setToAddress(result)
  }

  const handleToAddressClear = () => {
    setToAddress('')
  }

  const handleSendClick = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isCorrectChainId && !isConnectorSequenceBased) {
      await switchChainAsync({ chainId })
    }

    if (!isConnectorWaas) {
      executeTransaction()
      return
    }

    setIsCheckingFeeOptions(true)

    const sendAmount = parseUnits(amountToSendFormatted, decimals)
    let transaction

    if (isNativeCoin) {
      transaction = {
        to: toAddress as `0x${string}`,
        value: BigInt(sendAmount.toString())
      }
    } else {
      transaction = {
        to: tokenBalance?.contractAddress as `0x${string}`,
        data: encodeFunctionData({ abi: ERC_20_ABI, functionName: 'transfer', args: [toAddress, toHex(sendAmount)] })
      }
    }

    // Check fee options before showing confirmation
    const feeOptionsResult = await checkFeeOptions({
      transactions: [transaction],
      chainId
    })

    setFeeOptions(
      feeOptionsResult?.feeOptions
        ? {
            options: feeOptionsResult.feeOptions,
            chainId
          }
        : undefined
    )

    setShowConfirmation(true)

    setIsCheckingFeeOptions(false)
  }

  const executeTransaction = async () => {
    if (!isCorrectChainId && isConnectorSequenceBased) {
      await switchChainAsync({ chainId })
    }

    analytics?.track({
      event: 'SEND_TRANSACTION_REQUEST',
      props: {
        walletClient: (connector as ExtendedConnector | undefined)?._wallet?.id || 'unknown',
        source: 'sequence-kit/wallet'
      }
    })

    if (!walletClient) {
      console.error('Wallet client not found')
      toast({
        title: 'Error',
        description: 'Wallet client not available. Please ensure your wallet is connected.',
        variant: 'error'
      })
      setIsSendTxnPending(false)
      return
    }

    setIsSendTxnPending(true)

    const sendAmount = parseUnits(amountToSendFormatted, decimals)
    let txHash: Hex | undefined

    try {
      if (isNativeCoin) {
        console.log('Sending native coin via walletClient')
        txHash = await walletClient.sendTransaction({
          account: accountAddress as `0x${string}`,
          to: toAddress as `0x${string}`,
          value: BigInt(sendAmount.toString()),
          chain: chains.find(c => c.id === chainId)
        })
      } else {
        console.log('Sending ERC20 coin via walletClient')
        txHash = await walletClient.sendTransaction({
          account: accountAddress as `0x${string}`,
          to: tokenBalance?.contractAddress as `0x${string}`,
          data: encodeFunctionData({ abi: ERC_20_ABI, functionName: 'transfer', args: [toAddress, toHex(sendAmount)] }),
          chain: chains.find(c => c.id === chainId)
        })
      }

      // Handle successful transaction submission
      setIsBackButtonEnabled(true)
      if (txHash) {
        setNavigation({
          location: 'home'
        })
        setIsSendTxnPending(false) // Set pending to false immediately after getting hash

        toast({
          title: 'Transaction sent',
          description: `Successfully sent ${amountToSendFormatted} ${symbol} to ${toAddress}`,
          variant: 'success'
        })

        // Wait for receipt in the background
        if (publicClient) {
          waitForTransactionReceipt({
            indexerClient,
            txnHash: txHash,
            publicClient,
            confirmations: TRANSACTION_CONFIRMATIONS_DEFAULT
          })
            .then(() => {
              clearCachedBalances()
              console.log('Transaction confirmed and balances cleared:', txHash)
            })
            .catch(error => {
              console.error('Error waiting for transaction receipt:', error)
              // Optionally show another toast for confirmation failure
            })
        }
      } else {
        // Handle case where txHash is unexpectedly undefined
        setIsSendTxnPending(false)
        toast({
          title: 'Transaction Error',
          description: 'Transaction submitted but no hash received.',
          variant: 'error'
        })
      }
    } catch (error: any) {
      console.error('Transaction failed:', error)
      setIsSendTxnPending(false)
      setIsBackButtonEnabled(true)
      toast({
        title: 'Transaction Failed',
        description: error?.shortMessage || error?.message || 'An unknown error occurred.',
        variant: 'error'
      })
    }
  }

  return (
    <form
      className="flex px-4 pb-4 gap-2 flex-col"
      style={{
        marginTop: HEADER_HEIGHT_WITH_LABEL
      }}
      onSubmit={handleSendClick}
    >
      {!showConfirmation && (
        <>
          <div className="flex bg-background-secondary rounded-xl p-4 gap-2 flex-col">
            <SendItemInfo
              imageUrl={imageUrl}
              decimals={decimals}
              name={name}
              symbol={symbol}
              balance={tokenBalance?.balance || '0'}
              fiatValue={computeBalanceFiat({
                balance: tokenBalance as TokenBalance,
                prices: coinPrices,
                conversionRate,
                decimals
              })}
              chainId={chainId}
            />
            <NumericInput
              ref={amountInputRef}
              name="amount"
              value={amount}
              onChange={handleChangeAmount}
              controls={
                <>
                  <Text className="whitespace-nowrap" variant="small" color="muted">
                    {`~${fiatCurrency.sign}${amountToSendFiat}`}
                  </Text>
                  <Button className="shrink-0" size="xs" shape="square" label="Max" onClick={handleMax} data-id="maxCoin" />
                </>
              }
            />
          </div>
          <div className="flex bg-background-secondary rounded-xl p-4 gap-2 flex-col">
            <Text variant="normal" color="muted">
              To
            </Text>
            {isEthAddress(toAddress) ? (
              <Card
                className="flex w-full flex-row justify-between items-center"
                clickable
                onClick={handleToAddressClear}
                style={{ height: '52px' }}
              >
                <div className="flex flex-row justify-center items-center gap-2">
                  <GradientAvatar size="sm" address={toAddress} />
                  <Text color="primary" variant="normal">{`0x${truncateAtMiddle(toAddress.substring(2), 10)}`}</Text>
                </div>
                <CloseIcon className="text-white" size="sm" />
              </Card>
            ) : (
              <>
                <TextInput
                  value={toAddress}
                  onChange={ev => setToAddress(ev.target.value)}
                  placeholder={`${nativeTokenInfo.name} Address (0x...)`}
                  name="to-address"
                  data-1p-ignore
                  controls={
                    <Button
                      className="shrink-0"
                      size="xs"
                      shape="square"
                      label="Paste"
                      onClick={handlePaste}
                      data-id="to-address"
                      leftIcon={CopyIcon}
                    />
                  }
                />
                {wallets.length > 1 && <WalletSelect selectedWallet={toAddress} onClick={setToAddress} />}
              </>
            )}
          </div>

          <div className="flex items-center justify-center mt-2" style={{ height: '52px' }}>
            {isCheckingFeeOptions ? (
              <Spinner />
            ) : (
              <Button
                className="text-primary w-full"
                variant="primary"
                size="lg"
                type="submit"
                disabled={!isNonZeroAmount || !isEthAddress(toAddress) || insufficientFunds}
                label="Send"
                rightIcon={ChevronRightIcon}
              />
            )}
          </div>
        </>
      )}
      {showConfirmation && (
        <TransactionConfirmation
          name={name}
          symbol={symbol}
          imageUrl={imageUrl}
          amount={amountToSendFormatted}
          toAddress={toAddress}
          chainId={chainId}
          balance={tokenBalance?.balance || '0'}
          decimals={decimals}
          fiatValue={amountToSendFiat}
          feeOptions={feeOptions}
          onSelectFeeOption={feeTokenAddress => {
            setSelectedFeeTokenAddress(feeTokenAddress)
          }}
          isLoading={isSendTxnPending}
          disabled={!isCorrectChainId && !isConnectorSequenceBased}
          onConfirm={() => {
            executeTransaction()
          }}
          onCancel={() => {
            setShowConfirmation(false)
          }}
        />
      )}
    </form>
  )
}
