import React from 'react';
import styled from 'styled-components';

import ImgLogo from '../../img/logo.svg';
import ImgAccount from '../../img/account.svg';

const HeaderContainer = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;

  .logo,
  .account {
    cursor: pointer;
  }

  .menu {
    display: none;
  }

  @media (min-width: 600px) {
    .menu {
      display: flex;

      ul {
        display: flex;
        align-items: center;

        li {
          margin: 0 20px;

          a {
            color: #ffffff;
            font-weight: bold;
          }
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={ImgLogo} alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Equipment</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
      <div className="account">
        <img src={ImgAccount} alt="Account" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
