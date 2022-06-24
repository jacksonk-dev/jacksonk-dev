import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  position: fixed;
  top: 0;
  bottom: 0;
`
export const SocialsContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  margin: 16px 0;
`

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 50%;
  &:hover {
    color: #FFF176;
    border-color: #E57373;
  }
`

export const TopVerticalDivLine = styled.div`
  width: 5px;
  background: linear-gradient(to bottom, red, #fff);
  height: 200px;
`
export const BottomVerticalDivLine = styled(TopVerticalDivLine)`
  background: linear-gradient(to top, red, #fff);
`
