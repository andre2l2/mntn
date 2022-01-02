import React from 'react';
import styled from 'styled-components';

interface TextLineProps {
  text: string;
}

const TextLineContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 15px !important;
    color: #fbd784 !important;
    font-weight: bold;
  }

  @media (min-width: 600px) {
    p {
      font-size: 20px !important;
    }
  }
`;

const TextLineStyled = styled.span`
  display: inline-block;
  width: 72px;
  height: 2px;
  background-color: #fbd784;
  margin-right: 24px;
`;

const TextLine: React.FC<TextLineProps> = ({ text }) => {
  return (
    <TextLineContainer>
      <TextLineStyled />
      <p>{text}</p>
    </TextLineContainer>
  );
};

export default TextLine;
