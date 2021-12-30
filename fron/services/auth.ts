import axios from 'axios'
import { AuthInterface } from '../interfaces/User'
import { env } from '../next.config'

export const authService = (body: AuthInterface) => {
  try {
    if (body && env) {
      const encode = window.btoa(body.email + ':' + body.password)
      return axios.post(env.BACKEND, {}, {
        headers: {
          'Authorization': 'Basic ' + encode
        }
      })
    } else {
      return axios.get('')
    } 
  } catch (err) {
    console.log(err)
    return axios.get('')
  }
}