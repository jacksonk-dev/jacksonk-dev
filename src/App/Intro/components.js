import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Header = styled.p`
  color: #FFF176;
  font-family: 'Nixie One', cursive;
  font-size: 24px;
  margin-bottom: 32px;
`

export const HeadText = styled.h1`
  font-family: 'Nixie One', cursive;
  font-size: 48px;
`

export const Yellow = styled.span`
  color: #FFF176;
`

export const Red = styled.span`
 color: #E57373;
`
export const ImageContainer = styled.div`
  width: 162px;
  height: 162px;
  border-radius: 50%;
  background: linear-gradient(to right, red, yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
export const ImageInnerContainer = styled(ImageContainer)`
  width: 154px;
  height: 154px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Section = styled.div`
  margin: 24px 0 0 0;
`

export const AboutMe = styled.p`
  font-weight: 300;
  max-width: 500px;
  line-height: 28px;
`

export const InlineLink = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #FFF176;
`

export const WorkWithMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin: 16px auto;
  @media screen and (min-width: 768px){
    width: 340px;
  }
`

export const ButtonBackground = styled.div`
  width: 132px;
  padding: 2px;
  box-sizing: border-box;
  background: ${({ left }) => left ? 'linear-gradient(to left, yellow, red)' : 'linear-gradient(to right, yellow, red)'};
  @media screen and (min-width: 768px){
    width: 160px;
  }
`
export const ButtonLink = styled.a`
  width: 100%;
  height: 100%;
  padding: 12px 8px;
  display: block;
  box-sizing: border-box;
  background-color: #282c34;
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  @media screen and (min-width: 768px){
    font-size: 16px;
  }
`
