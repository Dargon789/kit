import { Wallet, WalletProperties } from '../../types'

import { ecosystemWallet as baseEcosystemWallet, BaseEcosystemConnectorOptions } from './ecosystemWallet'

export type EcosystemWalletOptions = BaseEcosystemConnectorOptions &
  Pick<WalletProperties, 'logoDark' | 'logoLight'> & {
    name?: string
  }

export const ecosystemWallet = (options: EcosystemWalletOptions): Wallet => ({
  id: 'ecosystem-wallet',
  logoDark: options.logoDark,
  logoLight: options.logoLight,
  name: options.name || 'Ecosystem Wallet',
  type: 'social',
  createConnector: () => baseEcosystemWallet(options)
})
