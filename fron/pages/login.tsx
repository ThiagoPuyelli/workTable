import type { NextPage } from 'next'
import styled from '@emotion/styled'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { env } from '../next.config'
import Link from 'next/link'

const Login: NextPage = () => {
  const LoginStyled = styled.div`
    padding: 30px;
  `

  const resolver = yup.object().shape({
    email: yup.string().required('El email es requerido').email('No es válido el email'),
    password: yup.string().required('La contraseña no es válida').min(4, 'Mínimo 4 caractéres').max(40, 'Máximo 40 caractéres')
  })

  const { register, formState: { errors }, handleSubmit, handleChange }: any = useForm({
    resolver: yupResolver(resolver),
    mode: 'onSubmit'
  })

  const submitForm = async (data: any) => {
    try {
      if (env) {
        const encode = window.btoa(data.email + ':' + data.password)
        const req = await axios.post(env.BACK + '/auth/sign-in', { }, {
          headers: {
            'Authorization': 'Basic ' + encode
          }
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
    
  return (
    <LoginStyled>
      <form className='loginForm' onSubmit={handleSubmit(submitForm)}>
        <h1>Iniciar Sesión</h1>
        <label className="labelForm" htmlFor="email">Correo</label>
        <input onChange={handleChange} type="email" className="inputText" {...register('email', {
          required: {
            message: 'Email inválido'
          },
          maxLength: {
            value: 64,
            message: 'Supera el maximo de caracteres'
          },
        })} placeholder='Correo' />
        <label className="labelForm" htmlFor="password">Contraseña</label>
        <input onChange={handleChange} type="password" className="inputText" placeholder='Contraseña' {...register('password', {
          required: true,
          maxLength: {
            value: 40,
            message: 'Supera el máximo de caracteres'
          },
          minLength: {
            value: 4,
            message: 'Mínimo 4 caracteres'
          }
        })} />
        {errors ? Object.keys(errors).map((prop) => {
          return <span className='errorMessage' key={prop}>{errors[prop].message}</span>
        }) : null}
        <input type="submit" value="Enviar" className='buttonSubmit' />
        <p>¿No tenes cuenta? <Link href="/register">Crear cuenta</Link></p>
      </form>
    </LoginStyled>    
  )
}

export default Login