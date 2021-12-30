import { useDispatch, useSelector } from 'react-redux'
import { actionAuthLogin, actionAuthLogout } from '../redux/authReducer'
import { authService } from '../services/auth'
import StoreInterface, { AuthStoreInterface } from '../interfaces/StoreInterface'
import { AuthInterface } from '../interfaces/User'

const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: StoreInterface) => state.auth.isAuth)
  const isAuthFailed = useSelector((state: StoreInterface) => state.auth.isAuthFailed)
  const isLoading = useSelector((state: StoreInterface) => state.auth.isLoading)

  const loginUser = async (user: AuthInterface) => {
    dispatch(actionAuthLogin.loading())
    try {
      const result: any = await authService(user)
      if (result && result?.code === 200) {
        dispatch(actionAuthLogin.success(result.token))
      } else {
        dispatch(actionAuthLogin.error())
      }
    } catch (err) {
      dispatch(actionAuthLogin.error())
    }
  }

  const logout = () => dispatch(actionAuthLogout())

  return {
    isAuth,
    isAuthFailed,
    isLoading,
    loginUser,
    logout
  }
}

export default useAuth
