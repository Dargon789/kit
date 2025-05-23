'use client'

import React from 'react'

import { createGenericContext } from './genericContext'

type ConnectModalContext = {
  isConnectModalOpen: boolean
  setOpenConnectModal: React.Dispatch<React.SetStateAction<boolean>>
  openConnectModalState: boolean
}

const [useConnectModalContext, ConnectModalContextProvider] = createGenericContext<ConnectModalContext>()

export { useConnectModalContext, ConnectModalContextProvider }
