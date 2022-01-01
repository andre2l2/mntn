import React from 'react';
import styled from 'styled-components';

import Header from './components/header/Header.compomemt';
import HomeText from './components/homeText/HomeText.component';
import Main from './components/main/Main.component';

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #354147;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <HomeText />
      <Main />
    </Container>
  );
};

export default App;