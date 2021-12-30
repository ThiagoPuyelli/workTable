import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Link from 'next/link'

const Register: NextPage = () => {
  const RegisterStyled = styled.div``
    
  return (
    <RegisterStyled>
      <form className='loginForm'>
        <h1>Crea tu cuenta</h1>
        <label htmlFor="name" className='labelForm'>Nombre</label>
        <input type="name" className="inputText" placeholder='Nombre' />
        <label htmlFor="lastname" className='labelForm'>Apellidos</label>
        <input type="text" className='inputText' placeholder='Apellidos' />
        <label className="labelForm" htmlFor="email">Email</label>
        <input type="email" className="inputText" placeholder='Email' />
        <label className="labelForm" htmlFor="password">Password</label>
        <input type="password" className="inputText" placeholder='Password' />
        <input type="submit" value="Enviar" className='buttonSubmit' />
        <p>¿Ya tenes cuenta? <Link href="/login">Iniciar Sesión</Link></p>
      </form>
    </RegisterStyled>
  )
}

export default Register