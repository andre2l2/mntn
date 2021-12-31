import React from 'react';
import styled from 'styled-components';

const PositionPageContainer = styled.div``;

const SliderBG = styled.div`
  height: 434px;
  width: 3px;
  background-color: #ffffff;
  opacity: 0.5;
  margin: 0 30px;
  position: relative;
`;

const SliderIndicator = styled.div`
  height: 20%;
  width: 3px;
  background-color: #fbd784;
  position: absolute;
  top: 20%;
`;

const PositionPage: React.FC = () => {
  return (
    <PositionPageContainer>
      <SliderBG>
        <SliderIndicator />
      </SliderBG>
    </PositionPageContainer>
  );
};

export default PositionPage;
