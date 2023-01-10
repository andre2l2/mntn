import React from 'react';
import styled from 'styled-components';

import IconArrowDown from '../../icons/arrow_down.svg';
import IconInstagram from '../../icons/instagram.svg';
import IconTwitter from '../../icons/twitter.svg';
import bgImage from '../../img/bg-image.jpg';

import PositionPage from '../positionPage/PositionPage.component';
import TextLine from '../TextLine/textLine.component';

const HomeTextContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  background-image: url(${bgImage});
  background-size: cover;
  background-position-y: 100%;

  .social-midia {
    display: none;
  }

  .slider {
    display: none;
  }

  .home-text {
    width: 300px;
    margin: 0 auto;

    p:last-child {
      color: #ffffff;
      font-size: 15px;
      cursor: pointer;
      display: flex;
      align-items: center;

      img {
        margin-left: 20px;
      }
    }

    p:nth-child(2) {
      margin: 10px 0;
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

      p:last-child {
        font-size: 20px;
      }
    }

    .social-midia {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
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

      position: fixed;
      right: 15px;
      transform: translate(-100%);
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
        <TextLine text="A HIKING GUIDE" />
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
