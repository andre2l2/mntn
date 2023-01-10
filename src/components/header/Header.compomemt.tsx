import React from 'react';
import styled from 'styled-components';

import ImgAccount from '../../img/account.svg';
import ImgLogo from '../../img/logo.svg';
import Link from '../link/Link.component';

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
            <Link href="#">Equipment</Link>
          </li>
          <li>
            <Link href="#">About us</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
        </ul>
      </div>
      <div className="account">
        <Link href="#">
          <img src={ImgAccount} alt="Account" />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
