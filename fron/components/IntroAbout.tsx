import type { NextPage } from 'next'
import styled from '@emotion/styled'
import Image from 'next/image'
import tablesImage from '../public/img/tables.svg'

const IntroAbout: NextPage = () => {
  const IntroAboutStyled = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 30px;
    .contentText {
      text-align: center;
      .titleIntroAbout {
        margin-top: 50px;
        font-size: 45px;
      }
      .textIntroAbout {
        margin: 30px;
      }
    }
    .imageIntroAbout {
      width: 400px;
    }
  `
  return (
    <IntroAboutStyled>
      <div className="contentText">
        <h1 className='titleIntroAbout'>Fácil de <span style={{textDecoration: 'underline'}}>usar</span></h1>
        <p className='textIntroAbout'>
          Crea tus tablas de una forma muy interactiva, <br /> para controlar el avance de todos
        </p>
      </div>
      <div className="imageIntroAbout">
        <Image src={tablesImage} alt='Imagen de about en el home' />
      </div>
    </IntroAboutStyled>
  )
}

export default IntroAbout