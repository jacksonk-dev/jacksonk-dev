import {
  IoLogoJavascript as JsIcon,
  IoLogoAngular as AngularIcon
} from 'react-icons/io'
import {
  SiReact as ReactIcon,
  SiKotlin as KotlinIcon
} from 'react-icons/si'

import { Header, Root, TechItemContainer, TechItemsContainer, TechItemTitle } from './components'

const techNologies = [
  {
    title: 'JavaScript',
    Icon: JsIcon,
  },
  {
    title: 'React',
    Icon: ReactIcon
  },
  {
    title: 'Angular',
    Icon: AngularIcon
  },
  {
    title: 'Kotlin',
    Icon: KotlinIcon
  }
]

export default function Technologies() {
  return (
    <Root>
      <Header>{'<Some Tech I Work With />'}</Header>
      <TechItemsContainer>
        {
          techNologies.map(({ Icon, title }) => (
            <TechItemContainer key={title}>
              <Icon />
              <TechItemTitle>{title}</TechItemTitle>
            </TechItemContainer>
          ))
        }
      </TechItemsContainer>
    </Root>
  )
}
