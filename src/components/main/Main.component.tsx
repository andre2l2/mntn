import React from 'react';
import styled, { css } from 'styled-components';

import Img01 from '../../img/ex1.png';
import Img02 from '../../img/ex2.png';
import Img03 from '../../img/ex3.png';

interface ImageAndTextProps {
  title: string;
  text: string;
  image: string;
  isInverted?: boolean;
}

interface MainContainerProps {
  isInverted?: boolean;
}

const MainContainer = styled.main<MainContainerProps>`
  .infos {
    max-width: 1000px;
    margin: 100px auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;

    .text {
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
    }

    img {
      width: 266px;
    }
  }

  @media (min-width: 600px) {
    .infos {
      justify-content: space-between;

      ${(props) =>
        props.isInverted
          ? css`
              flex-direction: row-reverse;
            `
          : css`
              flex-direction: row;
            `}

      .text {
        p,
        h1 {
          width: 466px;
        }

        h1 {
          font-size: 64px;
        }

        p {
          font-size: 18px;
        }
      }

      img {
        width: 366px;
      }
    }
  }
`;

const ImageAndText: React.FC<ImageAndTextProps> = ({ title, text, image, isInverted }) => {
  return (
    <MainContainer isInverted={isInverted}>
      <div className="infos">
        <div className="text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
    </MainContainer>
  );
};

const Main: React.FC = () => {
  return (
    <>
      <ImageAndText
        title="What level of hiker are you?"
        text="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking
            level guide will help you plan hikes according to different hike ratings set by various websites like All
            Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert
            backpacker?"
        image={Img01}
      />
      <ImageAndText
        title="Picking the right Hiking Gear!?"
        text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get
              away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is 
              wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        image={Img02}
        isInverted
      />
      <ImageAndText
        title="Understand Your Map & Timing"
        text="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the
              guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I
              hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        image={Img03}
      />
    </>
  );
};

export default Main;
