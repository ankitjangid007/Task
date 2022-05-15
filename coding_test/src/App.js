import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100%;
  position: relative;
`;


function App() {
  return (
    <Container>
        <Header />
        <Body />
        <Footer />
    </Container>
  );
}

export default App;
