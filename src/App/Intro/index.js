import dp from '../assets/images/profile.jpg'
import resume from "../assets/docs/JacksonDeveloperResume.pdf"
import { Root, ImageContainer, Image, Yellow, Red, ImageInnerContainer, AboutMe, WorkWithMe, ButtonLink, InlineLink, ButtonBackground } from './components'

export default function Intro() {
  return (
    <Root>
      <ImageContainer>
        <ImageInnerContainer>
          <Image src={dp} alt="dp" />
        </ImageInnerContainer>
      </ImageContainer>
      <h1><Yellow>Hi</Yellow>, I'm <Red>Jackson</Red></h1>
      <AboutMe>
        A software engineer based in Kampala, Uganda.
        I'm experienced in building web applications using
        various technologies. Send me a mail on &nbsp;
        <InlineLink href="mailto:jacksonk.dev@gmail.com" target="_blank">jacksonk.dev@gmail.com</InlineLink>&nbsp;
        or get in touch via <InlineLink href="https://www.linkedin.com/in/jacksonk-dev" target="_blank">LinkedIn</InlineLink>.
      </AboutMe>
      <WorkWithMe>
        <ButtonBackground>
          <ButtonLink href="mailto:jacksonk.dev@gmail.com">Send Me a Mail</ButtonLink>
        </ButtonBackground>
        <ButtonBackground>
          <ButtonLink href={resume}>Download Resume</ButtonLink>
        </ButtonBackground>
      </WorkWithMe>
    </Root>
  )
}
