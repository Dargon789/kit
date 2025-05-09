import { renderHook, waitFor } from '@testing-library/react'
import { HttpResponse, http } from 'msw'
import { describe, expect, it } from 'vitest'

import { ACCOUNT_ADDRESS, ZERO_ADDRESS } from '../../constants'
import { useGetSwapQuote } from '../../hooks/Combination/useGetSwapQuote'
import { createWrapper } from '../createWrapper'
import { server } from '../setup'

const getSwapQuoteArgs = {
  userAddress: ACCOUNT_ADDRESS,
  buyCurrencyAddress: ZERO_ADDRESS,
  sellCurrencyAddress: ZERO_ADDRESS,
  buyAmount: '20000',
  chainId: 1,
  includeApprove: true
}

describe('useGetSwapQuoteV2', () => {
  it('should return data with a balance', async () => {
    const { result } = renderHook(() => useGetSwapQuote(getSwapQuoteArgs), {
      wrapper: createWrapper()
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toBeDefined()

    const value = BigInt(result.current.data!.currencyBalance || 0)

    expect(value).toBeGreaterThan(0)
  })

  it('should return error when fetching data fails', async () => {
    server.use(
      http.post('*', () => {
        return HttpResponse.error()
      })
    )

    const { result } = renderHook(() => useGetSwapQuote(getSwapQuoteArgs, { retry: false }), {
      wrapper: createWrapper()
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
  })
})
