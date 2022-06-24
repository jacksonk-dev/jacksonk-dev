import dp from '../assets/images/profile.jpg'
import resume from "../assets/docs/JacksonDeveloperResume.pdf"
import { Root, ImageContainer, Image, Yellow, Red, ImageInnerContainer, AboutMe, WorkWithMe, ButtonLink } from './components'

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
        various technologies.
      </AboutMe>
      <WorkWithMe>
        <ButtonLink href="mailto:jacksonk.dev@gmail.com">Send Me a Mail</ButtonLink>
        <ButtonLink href={resume}>Download Resume</ButtonLink>
      </WorkWithMe>
    </Root>
  )
}
