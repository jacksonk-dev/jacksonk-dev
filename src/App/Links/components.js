import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px){
    width: fit-content;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 8px;
    bottom: 0;
  }
`
export const SocialsContainer = styled.div`
  width: 100%;
  text-align: center;
  grid-gap: 16px;
  @media screen and (min-width: 768px){
    margin: 16px 0;
  }
`

export const SocialLink = styled.a`
  color: #fff;
  font-size: 24px;
  height: 48px;
  width: 48px;
  margin: 0 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 50%;
  transition: font-size 0.2s linear;
  &:hover {
    font-size: 32px;
  }
  @media screen and (min-width: 768px){
    display: flex;
    margin: 16px 0;
  }
`

export const TopVerticalDivLine = styled.div`
  @media screen and (min-width: 768px){
    width: 5px;
    background: linear-gradient(to bottom, red, #fff);
    height: 200px;
  }
`
export const BottomVerticalDivLine = styled(TopVerticalDivLine)`
  @media screen and (min-width: 768px){  
    background: linear-gradient(to top, red, #fff);
  }
`
