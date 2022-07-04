import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  grid-gap: 12px;
  text-align: center;
`
const Header = styled.h3`
  color: #FFF176;
  font-size: 32px;
  margin-bottom: 0;
`
const PricesContainer = styled.div`
  display: grid;
  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
  }
  grid-gap: 16px;
`
const PriceContainer = styled.div`
  display: grid;
  grid-gap: 24px;
  align-items: center;
  padding: 48px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3)
`
const Price = styled.span`
  font-size: 32px;
  font-weight: 550
`
const PerMonth = styled.span`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7)
`
const Duration = styled.span`
  font-size: 18px;
  font-weight: 300
`
const Days = styled.span`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6)
`

export default function Pricing() {
  return (
    <Root>
      <Header>Hire Me For</Header>
      <PricesContainer>
        <PriceContainer>
          <Price>$1200 <PerMonth>@Month</PerMonth></Price>
          <Duration>4hr/day</Duration>
          <Days>Monday - Friday</Days>
        </PriceContainer>
        <PriceContainer>
          <Price>$2000 <PerMonth>@Month</PerMonth></Price>
          <Duration>8hr/day</Duration>
          <Days>Monday - Friday</Days>
        </PriceContainer>
        <PriceContainer>
          <Price>$15/hr</Price>
        </PriceContainer>
      </PricesContainer>
    </Root>
  )
}
