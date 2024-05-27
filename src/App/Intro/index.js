import dp from '../assets/images/profile.jpg'
import { Root, ImageContainer, Image, Yellow, Red, ImageInnerContainer, AboutMe, WorkWithMe, ButtonLink, InlineLink, ButtonBackground, HeadText, Section, Header, Wave } from './components'
import {
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaStackOverflow,
  FaYoutube as YoutubeIcon,
  FaTiktok as TikTokIcon
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
    link: 'https://www.twitter.com/thejackug',
    Icon: FaTwitter,
  },
  {
    title: 'Medium',
    link: 'https://medium.com/@jacksonk.dev',
    Icon: FaMedium,
  },
  {
    title: 'Youtube',
    link: 'https://www.youtube.com/@thejackug',
    Icon: YoutubeIcon,
  },
  {
    title: 'TikTok',
    link: 'https://www.tiktok.com/@thejackug',
    Icon: TikTokIcon,
  }
]

export default function Intro() {
  const linkedInURL = 'https://www.linkedIn.com/in/jacksonk-dev';
  return (
    <Root>
      <ImageContainer>
        <ImageInnerContainer>
          <Image src={dp} alt="dp" />
        </ImageInnerContainer>
      </ImageContainer>
      <HeadText><Yellow>HELLO!</Yellow><Wave className='wave'>👋</Wave>, I'M <Red>JACKSON</Red></HeadText>
      <AboutMe>
        A full-stack software engineer based in Kampala, Uganda.
        I'm experienced in building web applications and APIs using
        various technologies including but not limited to JavaScript/React/Angular, Java/Spring Boot, Postgres and Firebase.
      </AboutMe>
      <Section>
        <Header>CHECK ME OUT / GET IN TOUCH</Header>
        <Links items={leftSocials} />
        <WorkWithMe>
          <ButtonBackground>
            <ButtonLink href="mailto:jacksonk.dev@gmail.com">Send Me a Mail</ButtonLink>
          </ButtonBackground>
          <ButtonBackground left>
            <ButtonLink href={linkedInURL} target="_blank">My LinkedIn</ButtonLink>
          </ButtonBackground>
        </WorkWithMe>
      </Section>
    </Root>
  )
}
