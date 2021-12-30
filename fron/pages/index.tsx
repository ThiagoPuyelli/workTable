import type { NextPage } from 'next'
import Presentation from '../components/Presentation'
import IntroAbout from '../components/IntroAbout'

const Home: NextPage = () => {
  return (
    <div>
      <Presentation />
      <IntroAbout />
    </div>
  )
}

export default Home
