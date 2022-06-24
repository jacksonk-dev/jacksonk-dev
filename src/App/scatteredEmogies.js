import styled from 'styled-components'
import { FaLaughWink as Wink } from 'react-icons/fa'

const Emoji = styled(Wink)`
  color: #FFF176;
  font-size: 72px;
  position: fixed;
  right: 5%;
  top: 5%;
  @media screen and (min-width: 768px){
    right: 15%;
    top: 10%;   
  }
`
export default function ScatteredEmojies() {
  return (
    <Emoji />
  )
}
