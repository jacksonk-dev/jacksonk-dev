import dp from '../assets/images/profile.jpg'
import { Root, ImageContainer, Image, Yellow, Red, ImageInnerContainer, AboutMe, WorkWithMe, ButtonLink, InlineLink, ButtonBackground, HeadText, Section, Header, Wave } from './components'
import {
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaStackOverflow,
} from 'react-icons/fa';

import Links from '../Links';

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

export default function Intro() {
  const resumeURL = 'https://drive.google.com/file/d/1a2IilNqN48Mb2nt0Ou4TkCS_LpZW_eon/view?usp=sharing';
  return (
    <Root>
      <ImageContainer className='spin'>
        <ImageInnerContainer>
          <Image src={dp} alt="dp" />
        </ImageInnerContainer>
      </ImageContainer>
      <HeadText><Yellow>HELLO!</Yellow><Wave className='wave'>👋</Wave>, I'M <Red>JACKSON</Red></HeadText>
      <AboutMe>
        A full-stack software engineer based in Kampala, Uganda.
        I'm experienced in building web applications and APIs using
        various technologies including but not limited to JavaScript/React/Angular, Java/Spring Boot, Postgres and Firebase. Send me a mail on &nbsp;
        <InlineLink href="mailto:jacksonk.dev@gmail.com" target="_blank">jacksonk.dev@gmail.com</InlineLink>&nbsp;
        or get in touch via <InlineLink href="https://www.linkedin.com/in/jacksonk-dev" target="_blank">LinkedIn</InlineLink>.
        Work with me.
      </AboutMe>
      <Section>
        <Header>CHECK ME OUT / GET IN TOUCH</Header>
        <Links items={leftSocials} />
        <WorkWithMe>
          <ButtonBackground>
            <ButtonLink href="mailto:jacksonk.dev@gmail.com">Send Me a Mail</ButtonLink>
          </ButtonBackground>
          <ButtonBackground left>
            <ButtonLink href={resumeURL} target="_blank">Checkout Resume</ButtonLink>
          </ButtonBackground>
        </WorkWithMe>
      </Section>
    </Root>
  )
}
