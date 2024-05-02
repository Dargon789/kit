import { getNetwork } from '@0xsequence/kit'
import { SequenceAPIClient, Token, TokenPrice, GetCoinPricesReturn } from '@0xsequence/api'
import { TokenMetadata } from '@0xsequence/metadata'
import { ChainId, networks } from '@0xsequence/network'

import { getPaperNetworkName } from '../utils'
import { SardineCheckout } from '..'

export interface FetchSardineClientTokenReturn {
  token: string,
  orderId: string,
}

export interface MethodArguments {
  [key: string]: any
}

export const fetchSardineClientToken = async (order: SardineCheckout, isDev: boolean, projectAccessKey: string, tokenMetadata?: TokenMetadata): Promise<FetchSardineClientTokenReturn> => {
  const randomNumber = Math.floor(Math.random() * 1000000)
  const timestamp = new Date().getTime()
  const referenceId = `sequence-kit-${randomNumber}-${timestamp}-${order.recipientAddress}-${networks[order.chainId as ChainId].name}-${order.contractAddress}-${order.contractAddress}-${order.recipientAddress}`


  // Test credentials: https://docs.sardine.ai/docs/integrate-payments/nft-checkout-testing-credentials
  const accessKey = isDev ? '17xhjK4yjRf1fr0am8kgKfICAAAAAAAAA' : projectAccessKey
  const url = isDev ? 'https://dev-api.sequence.app/rpc/API/GetSardineNFTCheckoutToken' : 'https://api.sequence.app/rpc/API/GetSardineNFTCheckoutToken'

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': `${accessKey || ''}`
    },
    body: JSON.stringify(
      { 
        params: {
          referenceId,
          expiresIn: 3600,
          paymentMethodTypeConfig: {
            enabled: ['us_debit', 'us_credit', 'international_debit', 'international_credit', 'ach'],
            default: order.defaultPaymentMethodType
          },
          name: tokenMetadata?.name || 'Unknown',
          imageUrl: tokenMetadata?.image || '',
          network: networks[order.chainId as ChainId].name,
          recipientAddress: order.recipientAddress,
          platform: 'horizon',
          blockchainNftId: order.blockchainNftId,
          contractAddress: order.contractAddress,
          executionType: 'smart_contract',
          quantity: Number(order.quantity),
          decimals: Number(order.decimals),
        }
      }
    )
  })

  const { resp: { orderId, token } } = await res.json()

  return ({
    token,
    orderId,
  })
}


export const fetchSardineOrderStatus = async (orderId: string, isDev: boolean, projectAccessKey: string) => {
  // Test credentials: https://docs.sardine.ai/docs/integrate-payments/nft-checkout-testing-credentials
  const accessKey = isDev ? '17xhjK4yjRf1fr0am8kgKfICAAAAAAAAA' :  projectAccessKey
  const url = isDev ? 'https://dev-api.sequence.app/rpc/API/GetSardineNFTCheckoutOrderStatus' : 'https://api.sequence.app/rpc/API/GetSardineNFTCheckoutOrderStatus'
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Key': `${accessKey}`
    },
    body: JSON.stringify({
      orderId,
    })
  })

  const json = await response.json()
  console.log('json:', json)
  return json
}

export interface Country {
  code: string,
}

export const fetchSupportedCountryCodes = async (): Promise<Country[]> => {
  // Can also be fetches from sardine api
  const supportedCountries = [
    'AL',
    'AO',
    'AT',
    'BB',
    'BE',
    'BZ',
    'BJ',
    'BO',
    'BR',
    'BG',
    'KH',
    'KY',
    'CL',
    'CO',
    'KM',
    'CR',
    'HR',
    'CY',
    'CZ',
    'DK',
    'DM',
    'DO',
    'EC',
    'EG',
    'SV',
    'GQ',
    'EE',
    'FO',
    'FI',
    'FR',
    'GF',
    'DE',
    'GR',
    'GN',
    'GW',
    'GY',
    'HT',
    'HN',
    'HU',
    'IS',
    'ID',
    'IE',
    'IL',
    'IT',
    'JM',
    'JP',
    'KG',
    'LA',
    'LV',
    'LI',
    'LT',
    'LU',
    'MG',
    'MY',
    'MV',
    'MT',
    'MR',
    'MX',
    'MN',
    'MZ',
    'NL',
    'NO',
    'OM',
    'PA',
    'PY',
    'PE',
    'PH',
    'PL',
    'PT',
    'RO',
    'KN',
    'MF',
    'SA',
    'SC',
    'SG',
    'SK',
    'SI',
    'KR',
    'ES',
    'LK',
    'SE',
    'CH',
    'TZ',
    'TH',
    'TT',
    'TR',
    'AE',
    'GB',
    'UY',
    'UZ',
    'VU',
    'VN',
  ]

  return supportedCountries.map(countryCode => ({ code: countryCode }))
}