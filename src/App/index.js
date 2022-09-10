import styled from 'styled-components'

import Intro from "./Intro"
import Technologies from './Technologies';
import ScatteredEmojies from './scatteredEmogies';
// import Pricing from './pricing';

const Root = styled.div`
  color: #fff;
  padding: 8px;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #282c34;
  box-sizing: border-box;
  overflow: auto;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  margin: auto;
  padding: 0;
`

function App() {
  return (
    <Root>
      <Content>
        <Intro />
        <Technologies />
        <ScatteredEmojies />
        {/* <Pricing /> */}
      </Content>
    </Root>
  );
}

export default App;
