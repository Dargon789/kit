export const LOCAL_STORAGE_PREFIX = '@kit'
export const LOCAL_STORAGE_PREFIX_SETTINGS = 'settings'
export const LOCAL_STORAGE_PREFIX_THEME = 'theme'
export const LOCAL_STORAGE_PREFIX_ETHAUTH_PROOF = 'ethAuthProof'
export const LOCAL_STORAGE_PREFIX_ETHAUTH_SETTINGS = 'ethAuthSettings'

export enum LocalStorageKey {
  Settings = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_SETTINGS}`,
  Theme = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_THEME}`,
  EthAuthProof = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_ETHAUTH_PROOF}`,
  EthAuthSettings = `${LOCAL_STORAGE_PREFIX}.${LOCAL_STORAGE_PREFIX_ETHAUTH_SETTINGS}`
}
