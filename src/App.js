import Counter from './components/counter'
import Display from './components/display'
import styled from 'styled-components'

const App = () => {
  return (
    <Container>
      <Counter />
      <Display />
    </Container>
  );
}

const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #292929;
`

export default App;
