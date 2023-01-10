import React from 'react';
import styled from 'styled-components';

import Footer from './components/footer/Footer.component';
import Header from './components/header/Header.compomemt';
import HomeText from './components/homeText/HomeText.component';
import Main from './components/main/Main.component';

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #0b1d26;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <HomeText />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
