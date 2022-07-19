import styled from 'styled-components'
import {
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

import Intro from "./Intro"
import SideBar from './SideBar';
import Technologies from './Technologies';
import ScatteredEmojies from './scatteredEmogies';
// import Pricing from './pricing';

const Root = styled.div`
  color: #fff;
  padding: 8px;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #282c34;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: auto;
  padding: 0;
  padding-left: 64px;
  overflow-x: hidden;
  @media screen and (min-width: 768px){
    padding-left: 0;
  }
`

const leftSocials = [
  {
    title: 'Github',
    link: 'https://github.com/jacksonk-dev',
    Icon: FaGithub,
  },
  {
    title: 'StackOverflow',
    link: 'https://stackoverflow.com/users/9135987/jacksonk-dev?tab=profile',
    Icon: FaStackOverflow,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedIn.com/in/jacksonk-dev',
    Icon: FaLinkedin,
  },
  {
    title: 'Twitter',
    link: 'https://www.twitter.com/jacksonk_dev',
    Icon: FaTwitter,
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@jacksonk.dev',
    Icon: FaMedium,
  },
]

function App() {
  return (
    <Root>
      <Content>
        <Intro />
        <Technologies />
        <ScatteredEmojies />
        {/* <Pricing /> */}
      </Content>
      <SideBar items={leftSocials} />
    </Root>
  );
}

export default App;
