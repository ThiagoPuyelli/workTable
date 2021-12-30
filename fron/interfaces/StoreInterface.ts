export interface AuthStoreInterface {
    isLoading?: boolean
    isAuth?: boolean
    isAuthFailed?: boolean
    token: string
}

export default interface StoreInterface {
  auth: AuthStoreInterface
}