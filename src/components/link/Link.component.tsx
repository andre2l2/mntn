import React from 'react';
import styled from 'styled-components';

interface LinkProps {
  href: string;
}

const LinkStyled = styled.a`
  padding: 10px;
  position: relative;
  transition: 0.2s;
  background: transparent;
  color: #ffffff;

  &::after {
    background-color: #fbd784;
    position: absolute;

    bottom: 0;
    left: 0;
    content: '';

    height: 2px;
    width: 0%;
    transition: 0.2s;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <LinkStyled href={href}>{children}</LinkStyled>;
};

export default Link;
