import { Header, Root, TechItemsContainer, Image } from './components'

export default function Technologies() {
  return (
    <Root>
      <Header>Tech & Tools I ❤️</Header>
      <TechItemsContainer>
        <Image
          src="https://img.shields.io/static/v1?label=&message=JavaSript/React/Angular&color=F0DB4F"
          alt="JavaScript/React/Angular"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=Java/Spring Boot&color=f89820"
          alt="Java/Spring Boot"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=CSS/SCSS/LESS&color=264de4"
          alt="CSS/SCSS/LESS"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=Material UI&color=FFEB3B"
          alt="Material UI"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=Styled Components&color=880E4F"
          alt="Styled Components"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=Jest/Enzyme/React Testing Library&color=blueviolet"
          alt="Jest/Enzyme/React Testing Library"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=Intellij IDEA&color=C2185B"
          alt="Intellij IDEA"
          height="24"
        />
        <Image
          src="https://img.shields.io/static/v1?label=&message=VS Code&color=0078d7"
          alt="VS Code"
          height="24"
        />
      </TechItemsContainer>
    </Root>
  )
}
