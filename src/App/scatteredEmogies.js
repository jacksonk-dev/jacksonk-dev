import styled from 'styled-components'
import { BsFillEmojiWinkFill as Wink } from 'react-icons/bs'

const Emoji = styled(Wink)`
  color: #FFF176;
  font-size: 64px;
  position: fixed;
  right: 10%;
  top: 10%;
`
export default function ScatteredEmojies() {
  return (
    <Emoji />
  )
}
