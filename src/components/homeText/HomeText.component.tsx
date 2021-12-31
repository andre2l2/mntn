import React from 'react';
import styled from 'styled-components';

import IconArrowDown from '../../icons/arrow_down.svg';
import IconInstagram from '../../icons/instagram.svg';
import IconTwitter from '../../icons/twitter.svg';

import TextLine from '../TextLine/textLine.component';
import PositionPage from '../positionPage/PositionPage.component';

const HomeTextContainer = styled.div`
  width: 240px;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .social-midia {
    display: none;
  }

  .slider {
    display: none;
  }

  .home-text {
    p:first-child,
    p:last-child {
      font-size: 15px;
    }

    p:first-child {
      color: #fbd784;
    }

    p:last-child {
      cursor: pointer;
    }

    p:nth-child(2) {
      margin: 10px 0;
    }

    p {
      color: #ffffff;
      font-size: 30px;
    }

    img {
      height: 20px;
    }
  }

  .bold {
    font-weight: bold;
  }

  @media (min-width: 600px) {
    width: 100%;
    position: relative;

    .home-text {
      width: 600px;
      margin: 0 auto;

      p:nth-child(2) {
        font-size: 60px;
      }

      p:first-child {
        display: flex;
        align-items: center;
      }

      p:first-child,
      p:last-child {
        font-size: 20px;
      }
    }

    .social-midia {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 0;

      span {
        width: 70px;
        color: #ffffff;
        font-weight: bold;
        transform: rotate(90deg);
        margin: 30px 0;
      }

      a {
        margin: 5px 0;
      }
    }

    .slider {
      display: block;
    }
  }
`;

const HomeText: React.FC = () => {
  return (
    <HomeTextContainer>
      <div className="social-midia">
        <span>Follow us</span>
        <a href="">
          <img src={IconTwitter} alt="Twitter Logo" />
        </a>
        <a href="">
          <img src={IconInstagram} alt="Instagram Logo" />
        </a>
      </div>
      <div className="home-text">
        <p className="bold">
          <TextLine />A HIKING GUIDE
        </p>
        <p>Be prepared for the Mountains and beyond!</p>
        <p className="bold">
          scroll down <img src={IconArrowDown} alt="Arrow down" />
        </p>
      </div>
      <div className="slider">
        <PositionPage />
      </div>
    </HomeTextContainer>
  );
};

export default HomeText;
