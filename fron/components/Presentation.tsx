import type { NextPage } from 'next'
import PresentationImg from '../public/img/presentation.svg'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const Presentation: NextPage = () => {
  const PresentationStyled = styled.div`
    text-align: center;
    padding: 40px;
    padding-top: 100px;
    font-family: notoSans;
    background: linear-gradient(180deg, #ccc 0%, white 20%);
    * {
      animation: mostrarElemento 1s linear;
    }
    .imagePresentation {
      width: 300px;
      margin: 0px auto;
      margin-top: 50px;
      animation: mostrarElemento 1.1s linear;
    }
    .textPresentation {
      margin: 20px;
      font-size: 21px;
    }
    .linksPresentation {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin-top: 40px;
      .linkPresentation * {
        padding: 10px;
        margin: 20px;
        background: var(--black);
        color: white;
        border-radius: 20px;
        transition: 300ms all;
      }
      .linkPresentation *:hover {
        background: black;
      }
    }
  `

  return (
    <PresentationStyled>
      <h1 className='titlePresentation'>
        Bienvenido a la web donde puedes administrar tu trabajo en equipo
      </h1>
      <p className='textPresentation'>Empezá creandote una cuenta o iniciando sesión</p>
      <div className="linksPresentation">
        <div className="linkPresentation">
          <Link href='/register'>Crear Cuenta</Link>
        </div>
        <div className="linkPresentation">
          <Link href='/login'>Iniciar Sesión</Link>
        </div>
      </div>
      <div className="imagePresentation">
        <Image src={PresentationImg} alt='Imagen de presentacion' />
      </div>
    </PresentationStyled>
  )
}

export default Presentation