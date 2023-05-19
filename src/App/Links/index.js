import { BottomVerticalDivLine, Root, SocialLink, SocialsContainer, TopVerticalDivLine } from './components';

export default function SideBar({ items }) {
  return (
    <Root className='zoom-in'>
      <TopVerticalDivLine />
      <SocialsContainer>
        {
          items.map(({ title, link, Icon }) => (
            <SocialLink key={title} href={link} target="_blank">
              <Icon />
            </SocialLink>
          ))
        }
      </SocialsContainer>
      <BottomVerticalDivLine />
    </Root >
  )
}
