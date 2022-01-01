import React from 'react';
import styled, { css } from 'styled-components';

interface SliderIndicatorProps {
  position: number;
}

const SliderBG = styled.div`
  height: 434px;
  width: 3px;
  background-color: #ffffff;
  opacity: 0.5;
  position: relative;
`;

const SliderIndicator = styled.div<SliderIndicatorProps>`
  height: 20%;
  width: 3px;
  background-color: #fbd784;
  position: absolute;

  ${(props) => css`
    top: ${props.position}%;
  `}
`;

const PositionPage: React.FC = () => {
  return (
    <SliderBG>
      <SliderIndicator position={0} />
    </SliderBG>
  );
};

export default PositionPage;
