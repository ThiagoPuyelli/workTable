const initialState = {
  token: null,
  isAuth: false,
  isAuthFailed: false,
  isLoading: false
}

const AUTH_SUCCESS = 'AUTH_SUCCESS'
const AUTH_FAILED = 'AUTH_FAILED'
const AUTH_LOADING = 'AUTH_LOADING'
const AUTH_LOGOUT = 'AUTH_LOGOUT'

// Reducer
export const authReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, isLoading: true }
    case AUTH_SUCCESS:
      return { ...state, isAuthFailed: false, isLoading: false, isAuth: true, token: payload }
    case AUTH_FAILED:
      return { ...initialState, isAuthFailed: true }
    case AUTH_LOGOUT:
      return { ...initialState }

    default:
      return state
  }
}
  
// Actions
export const actionAuthLogin = {
  success: (token: string) => {
    return {
      type: AUTH_SUCCESS,
      payload: token
    }
  },
  error: () => {
    return {
      type: AUTH_FAILED
    }
  },
  loading: () => {
    return {
      type: AUTH_LOADING
    }
  }
}

export const actionAuthLogout = () => {
  return {
    type: AUTH_LOGOUT
  }
}
  