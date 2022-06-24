import styled from 'styled-components'

export const Root = styled.div`
  text-align: center;
  width: 320px;
  margin: 32px auto;
`
export const Header = styled.h3`
  color: #FFF176;
  font-size: 24px;
  margin-bottom: 32px;
`
export const TechItemsContainer = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(auto-fill, 72px);
`

export const TechItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 48px;
`
export const TechItemTitle = styled.span`
  font-size: 12px;
  margin-top: 8px;
`
