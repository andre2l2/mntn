import React, { useState } from 'react';
import styled from 'styled-components';

import ImgLogo from '../../img/logo.svg';

import Link from '../link/Link.component';
import packageJSON from '../../../package.json';

const FooterContainer = styled.footer`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 200px;
  background-color: #0b1d26;
  padding: 20px;
  position: relative;

  p {
    color: #ffffff;
  }

  span {
    color: #fbd784;
    font-size: 20px;
    margin-bottom: 24px;
  }

  .footer-title {
    margin-bottom: 24px;

    div {
      display: flex;
      align-items: center;
      flex-direction: column;

      img {
        margin-bottom: 24px;
      }

      p {
        text-align: center;
      }
    }
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
  }

  .copyright {
    padding: 30px 0;
    font-size: 16px;
    text-align: center;
  }

  @media (min-width: 600px) {
    display: flex;

    .footer-title {
      div {
        display: block;

        p {
          text-align: left;
        }
      }
    }

    .footer-links {
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;

      div {
        align-items: flex-start;
      }
    }

    .copyright {
      padding: 0;
      position: absolute;
      bottom: 30px;
      transform: translate(0, -100%);
    }
  }
`;

const Footer: React.FC = () => {
  const [year] = useState(new Date().getFullYear());
  const [version] = useState(packageJSON.version);

  return (
    <FooterContainer>
      <div className="footer-title">
        <div>
          <img src={ImgLogo} alt="MNTN" />
          <p>Get out there & discover your next slope, mountain & destination!</p>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <span>More on The Blog</span>
          <Link href="#">About MNTN</Link>
          <Link href="#">Contributors & Writers</Link>
          <Link href="#">Write For Us</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Privacy Policy</Link>
        </div>
        <div>
          <span>More on MNTN</span>
          <Link href="#">The Team</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Press</Link>
        </div>
      </div>
      <p className="copyright">
        Copyright {year} MNTN, Inc. Terms & Privacy v{version}
      </p>
    </FooterContainer>
  );
};

export default Footer;
