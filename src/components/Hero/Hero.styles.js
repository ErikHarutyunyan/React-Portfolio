import styled from "styled-components";
import { device } from "../../styles/device";

// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 428px
// Tablet - 768px
// Laptop - 1024px
// Laptop L - 1440px
// 4K - 2560px

// @media ${device.mobileL} {}

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeroImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: 9;
  transition: 0.8s;
  &.pyramids {
    transform: translateX(-600px);
  }
  &.palace {
    transform: translateX(600px);
  }
  @media ${device.laptop} {
    & {
      display: none;
    }
  }
`;

export const HeroContent = styled.div`
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(200px);
  opacity: 0;
  transition: 0.6s;
  & .content_title {
    width: 100%;
    margin-bottom: 30px;
  }

  & .content_title svg {
    width: 100%;
    margin: 0 auto;
  }

  @-webkit-keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 354.0000305175781px;
      stroke-dasharray: 354.0000305175781px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 354.0000305175781px;
    }
  }

  @keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 354.0000305175781px;
      stroke-dasharray: 354.0000305175781px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 354.0000305175781px;
    }
  }

  @-webkit-keyframes animate-svg-fill-1 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-1 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-1 {
    -webkit-animation: animate-svg-stroke-1 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
    animation: animate-svg-stroke-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s
        both,
      animate-svg-fill-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }

  @-webkit-keyframes animate-svg-stroke-2 {
    0% {
      stroke-dashoffset: 282.0519104003906px;
      stroke-dasharray: 282.0519104003906px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 282.0519104003906px;
    }
  }

  @keyframes animate-svg-stroke-2 {
    0% {
      stroke-dashoffset: 282.0519104003906px;
      stroke-dasharray: 282.0519104003906px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 282.0519104003906px;
    }
  }

  @-webkit-keyframes animate-svg-fill-2 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-2 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-2 {
    -webkit-animation: animate-svg-stroke-2 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
      animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
    animation: animate-svg-stroke-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s
        both,
      animate-svg-fill-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
  }

  @-webkit-keyframes animate-svg-stroke-3 {
    0% {
      stroke-dashoffset: 153.5110626220703px;
      stroke-dasharray: 153.5110626220703px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 153.5110626220703px;
    }
  }

  @keyframes animate-svg-stroke-3 {
    0% {
      stroke-dashoffset: 153.5110626220703px;
      stroke-dasharray: 153.5110626220703px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 153.5110626220703px;
    }
  }

  @-webkit-keyframes animate-svg-fill-3 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-3 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-3 {
    -webkit-animation: animate-svg-stroke-3 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
      animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
    animation: animate-svg-stroke-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s
        both,
      animate-svg-fill-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
  }

  @-webkit-keyframes animate-svg-stroke-4 {
    0% {
      stroke-dashoffset: 256.0147705078125px;
      stroke-dasharray: 256.0147705078125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 256.0147705078125px;
    }
  }

  @keyframes animate-svg-stroke-4 {
    0% {
      stroke-dashoffset: 256.0147705078125px;
      stroke-dasharray: 256.0147705078125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 256.0147705078125px;
    }
  }

  @-webkit-keyframes animate-svg-fill-4 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-4 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-4 {
    -webkit-animation: animate-svg-stroke-4 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s both,
      animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
    animation: animate-svg-stroke-4 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s
        both,
      animate-svg-fill-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
  }

  @-webkit-keyframes animate-svg-stroke-5 {
    0% {
      stroke-dashoffset: 182.4100799560547px;
      stroke-dasharray: 182.4100799560547px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 182.4100799560547px;
    }
  }

  @keyframes animate-svg-stroke-5 {
    0% {
      stroke-dashoffset: 182.4100799560547px;
      stroke-dasharray: 182.4100799560547px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 182.4100799560547px;
    }
  }

  @-webkit-keyframes animate-svg-fill-5 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-5 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-5 {
    -webkit-animation: animate-svg-stroke-5 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s both,
      animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.2000000000000002s both;
    animation: animate-svg-stroke-5 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s
        both,
      animate-svg-fill-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.2000000000000002s both;
  }

  @-webkit-keyframes animate-svg-stroke-6 {
    0% {
      stroke-dashoffset: 301.534423828125px;
      stroke-dasharray: 301.534423828125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 301.534423828125px;
    }
  }

  @keyframes animate-svg-stroke-6 {
    0% {
      stroke-dashoffset: 301.534423828125px;
      stroke-dasharray: 301.534423828125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 301.534423828125px;
    }
  }

  @-webkit-keyframes animate-svg-fill-6 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-6 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-6 {
    -webkit-animation: animate-svg-stroke-6 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both,
      animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
    animation: animate-svg-stroke-6 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s
        both,
      animate-svg-fill-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
  }

  @-webkit-keyframes animate-svg-stroke-7 {
    0% {
      stroke-dashoffset: 256.0147705078125px;
      stroke-dasharray: 256.0147705078125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 256.0147705078125px;
    }
  }

  @keyframes animate-svg-stroke-7 {
    0% {
      stroke-dashoffset: 256.0147705078125px;
      stroke-dasharray: 256.0147705078125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 256.0147705078125px;
    }
  }

  @-webkit-keyframes animate-svg-fill-7 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-7 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-7 {
    -webkit-animation: animate-svg-stroke-7 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s both,
      animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.4000000000000001s both;
    animation: animate-svg-stroke-7 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s
        both,
      animate-svg-fill-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.4000000000000001s both;
  }

  @-webkit-keyframes animate-svg-stroke-8 {
    0% {
      stroke-dashoffset: 254.91531372070312px;
      stroke-dasharray: 254.91531372070312px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 254.91531372070312px;
    }
  }

  @keyframes animate-svg-stroke-8 {
    0% {
      stroke-dashoffset: 254.91531372070312px;
      stroke-dasharray: 254.91531372070312px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 254.91531372070312px;
    }
  }

  @-webkit-keyframes animate-svg-fill-8 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-8 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-8 {
    -webkit-animation: animate-svg-stroke-8 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s both,
      animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
    animation: animate-svg-stroke-8 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s
        both,
      animate-svg-fill-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
  }

  @-webkit-keyframes animate-svg-stroke-9 {
    0% {
      stroke-dashoffset: 301.5345153808594px;
      stroke-dasharray: 301.5345153808594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 301.5345153808594px;
    }
  }

  @keyframes animate-svg-stroke-9 {
    0% {
      stroke-dashoffset: 301.5345153808594px;
      stroke-dasharray: 301.5345153808594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 301.5345153808594px;
    }
  }

  @-webkit-keyframes animate-svg-fill-9 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-9 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-9 {
    -webkit-animation: animate-svg-stroke-9 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s both,
      animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
    animation: animate-svg-stroke-9 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s
        both,
      animate-svg-fill-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
  }

  @-webkit-keyframes animate-svg-stroke-10 {
    0% {
      stroke-dashoffset: 282.0522766113281px;
      stroke-dasharray: 282.0522766113281px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 282.0522766113281px;
    }
  }

  @keyframes animate-svg-stroke-10 {
    0% {
      stroke-dashoffset: 282.0522766113281px;
      stroke-dasharray: 282.0522766113281px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 282.0522766113281px;
    }
  }

  @-webkit-keyframes animate-svg-fill-10 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-10 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-10 {
    -webkit-animation: animate-svg-stroke-10 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s both,
      animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.7000000000000002s both;
    animation: animate-svg-stroke-10 1s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.08s both,
      animate-svg-fill-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.7000000000000002s both;
  }

  @-webkit-keyframes animate-svg-stroke-11 {
    0% {
      stroke-dashoffset: 254.91526794433594px;
      stroke-dasharray: 254.91526794433594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 254.91526794433594px;
    }
  }

  @keyframes animate-svg-stroke-11 {
    0% {
      stroke-dashoffset: 254.91526794433594px;
      stroke-dasharray: 254.91526794433594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 254.91526794433594px;
    }
  }

  @-webkit-keyframes animate-svg-fill-11 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  @keyframes animate-svg-fill-11 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-11 {
    -webkit-animation: animate-svg-stroke-11 1s
        cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s both,
      animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
    animation: animate-svg-stroke-11 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s
        both,
      animate-svg-fill-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
  }
  & .sym {
    position: relative;
    width: 35vmin;
    height: 35vmin;
    border-radius: 50%;
    background: linear-gradient(white 50%, black 0);
    animation: r 2s linear infinite;
    margin-top: 50px;
    display: inline-block;
    border: 20px solid #000;
    box-sizing: content-box;
  }

  & .sym:before,
  & .sym:after {
    --i: 0;
    position: absolute;
    top: 25%;
    right: calc((1 - var(--i)) * 50%);
    bottom: 25%;
    left: calc(var(--i) * 50%);
    border: solid 8vmin hsl(0, 0%, calc(var(--i) * 275%));
    transform-origin: calc(var(--i) * 100%) 50%;
    transform: scale(0.5);
    background: hsl(0, 0%, calc((1 - var(--i)) * 100%));
    border-radius: 50%;
    animation: s 1s ease-in-out calc(var(--i) * -1s) infinite alternate;
    content: "";
    box-sizing: content-box;
  }
  & .sym:after {
    --i: 1;
  }

  @keyframes s {
    to {
      transform: scale(1.5);
    }
  }
  @keyframes r {
    to {
      transform: rotate(1turn);
    }
  }

  & .sym_wrapper {
    transform: scale(0);
    animation: leaves 5s ease;
    animation-delay: 0.05s;
    animation-fill-mode: forwards;
  }

  @keyframes leaves {
    to {
      transform: scale(1);
    }
  }

  @media ${device.laptop} {
    & .content_title {
      transform: scale(0.8);
    }
  }

  @media ${device.mobileL} {
    & .sym {
      width: 45vmin;
      height: 45vmin;
    }
    & .content_title {
      transform: scale(1);
      margin-bottom: 50px;
    }
    & .sym:before,
    & .sym:after {
      border: solid 9vmin hsl(0, 0%, calc(var(--i) * 275%));
    }
  }
`;
