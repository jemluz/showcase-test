import styled from "styled-components";
import tcm from '../../../assets/home-bg/tcm.svg';
import tem from '../../../assets/home-bg/tem.svg';
import em from '../../../assets/home-bg/em.svg';

import dtcm from '../../../assets/home-bg/d-tcm.svg';
import dtem from '../../../assets/home-bg/d-tem.svg';
import dem from '../../../assets/home-bg/d-em.svg';
import db from '../../../assets/home-bg/d-b.svg';

export const ParallaxContainer = styled.div`
  /* background layer */
  div#parallax-bg-3 {
    width: 100vw;
    height: 500px;

    left: 50%;

    display: grid;
    grid-template-columns: 1fr 530px 1fr;
    grid-template-rows: 1fr;
  }

  /* foreground */
  div#parallax-bg-3 div {
    background-repeat: no-repeat;
    overflow: hidden;
  }

  div#bg-3-1 {
    grid-column: 2 / 3;
    grid-row: 1;
    z-index: 3;
    opacity: 0.8;
    rotate: 215deg;
    height: 600px;
    margin-top: -50px;
  }

  div#bg-3-2 {
    grid-column: 2 / 3;
    z-index: 2;
    transform: rotate(-0.4turn);
    rotate: 360deg;
    height: 600px;
    margin-top: -610px;
  }

  div#bg-3-3 {
    grid-column: 2 / 3;
    z-index: 4;
    opacity: 0.5;
    margin-top: -650px;
  }

  @media only screen and (max-width: 900px) {
    div#bg-3-1 {
      background: url(${tcm});
    }
    div#bg-3-2 {
      background-image: url(${tem});
    }
    div#bg-3-3 {
      background: url(${em});
    }
    div#bg-3-4 {
      display: none;
    }
  }

  @media only screen and (min-width: 901px) {
    div#bg-3-1 {
      background: url(${dtcm});
    }
    div#bg-3-2 {
      background-image: url(${dtem});
    }
    div#bg-3-3 {
      background: url(${dem});
    }
    div#bg-3-4 {
      background: url(${db});
    }
  }
`;