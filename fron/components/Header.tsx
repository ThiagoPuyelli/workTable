import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Link from 'next/link'

const Header: NextPage = () => {
  const HeaderStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: 0px 30px 0px 30px;
    border-bottom: 2px solid var(--green);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    
    background: white;
    z-index: 1;
    
    .logo {
      letter-spacing: 2px;
      font-family: notoSans;
      font-size: 15px;
      margin: 10px;
      cursor: pointer;
      .contentLogo {
        transition: 0.5s all;
      }
    }

    .logo:hover .contentLogo {
      transform: rotateY(360deg);
    }

    .ulHeader {
      display: flex;
      flex-flow: row wrap;
      list-style: none;
      align-items: center !important;
      .elementMenu {
        margin: 10px;
        margin-bottom: 0px;
        .bar {
          padding: 0px;
          background: black;
          height: 2px;
          width: 0%;
          transition: 300ms all;
          margin-top: 5px;
        }
      }
      .elementMenu:hover .bar {
        width: 100%;
      }
      .auth {
        * {
          padding: 10px;
          background: var(--black);
          color: white;
          border-radius: 20px;
          box-shadow: 0px 0px 4px #ccc;
          cursor: pointer;
          transition: 300ms all;
        }
      }
      .auth:hover * {
        background: black;
      }
    }
  `
    
  return (
    <HeaderStyled>
      <div className="logo">
        <div className="contentLogo">
          <Link href='/' passHref><h1>Work<span style={{color: 'var(--green)'}}>Table</span></h1></Link>
        </div>
      </div>
      <ul className='ulHeader'>
        <li className='elementMenu'>
          <Link href='/'>Inicio</Link>
          <div className='bar'></div>
        </li>
        <li className='elementMenu'>
          <Link href='/about'>Sobre Mí</Link>
          <div className='bar'></div>
        </li>
        <li className='auth'>
          <Link href='/login'>Inicia sesión</Link>
        </li>
      </ul>
    </HeaderStyled>
  )
}

export default Header
