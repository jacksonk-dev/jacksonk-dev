import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 64px;
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

export const AboutMe = styled.p`
  font-weight: 300;
  max-width: 500px;
`
