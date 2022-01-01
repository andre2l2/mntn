import React from 'react';
import styled from 'styled-components';

import Img01 from '../../img/ex1.png';

const MainContainer = styled.main`
  .ex-1 {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    p,
    h1 {
      width: 266px;
      color: #ffffff;
    }

    h1 {
      margin-top: 20px;
    }

    p {
      margin: 20px 0 0 0;
      line-height: 28px;
      text-align: justify;
    }

    img {
      width: 266px;
    }
  }
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <div className="ex-1">
        <div>
          <h1>What level of hiker are you?</h1>
          <p>
            Determining what level of hiker you are can be an important tool when planning future hikes. This hiking
            level guide will help you plan hikes according to different hike ratings set by various websites like All
            Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert
            backpacker?{' '}
          </p>
        </div>
        <div>
          <img src={Img01} />
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
