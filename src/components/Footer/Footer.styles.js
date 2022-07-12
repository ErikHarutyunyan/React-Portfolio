import styled from "styled-components";
import { device } from "../../styles/device";

// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 428px
// Tablet - 768px
// Laptop - 1024px
// min Laptop L - 1440px
// min 4K - 2560px

export const FooterWrapper = styled.footer`
  height: 80px;
  border: 2px solid #404040;
`;

export const FooterTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;

  & svg {
    padding: 0 5.5%;
    height: 100%;
  }

  @keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 193.87405395507812px;
      stroke-dasharray: 193.87405395507812px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 193.87405395507812px;
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

  & .svg-elem-two-1 {
    animation: animate-svg-stroke-1 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0s
        both,
      animate-svg-fill-1 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }

  @keyframes animate-svg-stroke-2 {
    0% {
      stroke-dashoffset: 149.45347595214844px;
      stroke-dasharray: 149.45347595214844px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.45347595214844px;
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

  & .svg-elem-two-2 {
    animation: animate-svg-stroke-2 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.08s both,
      animate-svg-fill-2 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.8500000000000001s both;
  }

  @keyframes animate-svg-stroke-3 {
    0% {
      stroke-dashoffset: 76.5px;
      stroke-dasharray: 76.5px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 76.5px;
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

  & .svg-elem-two-3 {
    animation: animate-svg-stroke-3 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.16s both,
      animate-svg-fill-3 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both;
  }

  @keyframes animate-svg-stroke-4 {
    0% {
      stroke-dashoffset: 65.2132453918457px;
      stroke-dasharray: 65.2132453918457px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 65.2132453918457px;
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

  & .svg-elem-two-4 {
    animation: animate-svg-stroke-4 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.24s both,
      animate-svg-fill-4 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.9500000000000001s both;
  }

  @keyframes animate-svg-stroke-5 {
    0% {
      stroke-dashoffset: 109.49909973144531px;
      stroke-dasharray: 109.49909973144531px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 109.49909973144531px;
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

  & .svg-elem-two-5 {
    animation: animate-svg-stroke-5 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.32s both,
      animate-svg-fill-5 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both;
  }

  @keyframes animate-svg-stroke-6 {
    0% {
      stroke-dashoffset: 149.45355224609375px;
      stroke-dasharray: 149.45355224609375px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.45355224609375px;
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

  & .svg-elem-two-6 {
    animation: animate-svg-stroke-6 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.4s both,
      animate-svg-fill-6 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.05s both;
  }

  @keyframes animate-svg-stroke-7 {
    0% {
      stroke-dashoffset: 77.94697570800781px;
      stroke-dasharray: 77.94697570800781px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94697570800781px;
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

  & .svg-elem-two-7 {
    animation: animate-svg-stroke-7 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.48s both,
      animate-svg-fill-7 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s both;
  }

  @keyframes animate-svg-stroke-8 {
    0% {
      stroke-dashoffset: 201.80511474609375px;
      stroke-dasharray: 201.80511474609375px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 201.80511474609375px;
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

  & .svg-elem-two-8 {
    animation: animate-svg-stroke-8 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.56s both,
      animate-svg-fill-8 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.1500000000000001s both;
  }

  @keyframes animate-svg-stroke-9 {
    0% {
      stroke-dashoffset: 156.39683532714844px;
      stroke-dasharray: 156.39683532714844px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 156.39683532714844px;
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

  & .svg-elem-two-9 {
    animation: animate-svg-stroke-9 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.64s both,
      animate-svg-fill-9 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.2000000000000002s both;
  }

  @keyframes animate-svg-stroke-10 {
    0% {
      stroke-dashoffset: 125.07630157470703px;
      stroke-dasharray: 125.07630157470703px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 125.07630157470703px;
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

  & .svg-elem-two-10 {
    animation: animate-svg-stroke-10 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.72s both,
      animate-svg-fill-10 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.25s both;
  }

  @keyframes animate-svg-stroke-11 {
    0% {
      stroke-dashoffset: 137.37860107421875px;
      stroke-dasharray: 137.37860107421875px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.37860107421875px;
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

  & .svg-elem-two-11 {
    animation: animate-svg-stroke-11 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.8s both,
      animate-svg-fill-11 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3s both;
  }

  @keyframes animate-svg-stroke-12 {
    0% {
      stroke-dashoffset: 132.41148376464844px;
      stroke-dasharray: 132.41148376464844px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 132.41148376464844px;
    }
  }

  @keyframes animate-svg-fill-12 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-12 {
    animation: animate-svg-stroke-12 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.88s both,
      animate-svg-fill-12 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.35s both;
  }

  @keyframes animate-svg-stroke-13 {
    0% {
      stroke-dashoffset: 76.5px;
      stroke-dasharray: 76.5px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 76.5px;
    }
  }

  @keyframes animate-svg-fill-13 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-13 {
    animation: animate-svg-stroke-13 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.96s both,
      animate-svg-fill-13 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.4000000000000001s both;
  }

  @keyframes animate-svg-stroke-14 {
    0% {
      stroke-dashoffset: 97.51158142089844px;
      stroke-dasharray: 97.51158142089844px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 97.51158142089844px;
    }
  }

  @keyframes animate-svg-fill-14 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-14 {
    animation: animate-svg-stroke-14 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.04s both,
      animate-svg-fill-14 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.4500000000000002s both;
  }

  @keyframes animate-svg-stroke-15 {
    0% {
      stroke-dashoffset: 77.94703674316406px;
      stroke-dasharray: 77.94703674316406px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94703674316406px;
    }
  }

  @keyframes animate-svg-fill-15 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-15 {
    animation: animate-svg-stroke-15 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.12s both,
      animate-svg-fill-15 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.5s both;
  }

  @keyframes animate-svg-stroke-16 {
    0% {
      stroke-dashoffset: 137.37867736816406px;
      stroke-dasharray: 137.37867736816406px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.37867736816406px;
    }
  }

  @keyframes animate-svg-fill-16 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-16 {
    animation: animate-svg-stroke-16 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.2s both,
      animate-svg-fill-16 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.55s both;
  }

  @keyframes animate-svg-stroke-17 {
    0% {
      stroke-dashoffset: 201.80514526367188px;
      stroke-dasharray: 201.80514526367188px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 201.80514526367188px;
    }
  }

  @keyframes animate-svg-fill-17 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-17 {
    animation: animate-svg-stroke-17 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.28s both,
      animate-svg-fill-17 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.6s both;
  }

  @keyframes animate-svg-stroke-18 {
    0% {
      stroke-dashoffset: 92.25335693359375px;
      stroke-dasharray: 92.25335693359375px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 92.25335693359375px;
    }
  }

  @keyframes animate-svg-fill-18 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-18 {
    animation: animate-svg-stroke-18 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.36s both,
      animate-svg-fill-18 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.6500000000000001s both;
  }

  @keyframes animate-svg-stroke-19 {
    0% {
      stroke-dashoffset: 150.4552001953125px;
      stroke-dasharray: 150.4552001953125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 150.4552001953125px;
    }
  }

  @keyframes animate-svg-fill-19 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-19 {
    animation: animate-svg-stroke-19 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.44s both,
      animate-svg-fill-19 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.7000000000000002s both;
  }

  @keyframes animate-svg-stroke-20 {
    0% {
      stroke-dashoffset: 149.4537811279297px;
      stroke-dasharray: 149.4537811279297px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.4537811279297px;
    }
  }

  @keyframes animate-svg-fill-20 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-20 {
    animation: animate-svg-stroke-20 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.52s both,
      animate-svg-fill-20 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.75s both;
  }

  @keyframes animate-svg-stroke-21 {
    0% {
      stroke-dashoffset: 125.07659149169922px;
      stroke-dasharray: 125.07659149169922px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 125.07659149169922px;
    }
  }

  @keyframes animate-svg-fill-21 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-21 {
    animation: animate-svg-stroke-21 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.6s both,
      animate-svg-fill-21 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.8s both;
  }

  @keyframes animate-svg-stroke-22 {
    0% {
      stroke-dashoffset: 204.05699157714844px;
      stroke-dasharray: 204.05699157714844px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 204.05699157714844px;
    }
  }

  @keyframes animate-svg-fill-22 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-22 {
    animation: animate-svg-stroke-22 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.68s both,
      animate-svg-fill-22 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 1.85s both;
  }

  @keyframes animate-svg-stroke-23 {
    0% {
      stroke-dashoffset: 137.37893676757812px;
      stroke-dasharray: 137.37893676757812px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.37893676757812px;
    }
  }

  @keyframes animate-svg-fill-23 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-23 {
    animation: animate-svg-stroke-23 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.76s both,
      animate-svg-fill-23 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.9000000000000001s both;
  }

  @keyframes animate-svg-stroke-24 {
    0% {
      stroke-dashoffset: 77.94700622558594px;
      stroke-dasharray: 77.94700622558594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94700622558594px;
    }
  }

  @keyframes animate-svg-fill-24 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-24 {
    animation: animate-svg-stroke-24 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.84s both,
      animate-svg-fill-24 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.9500000000000002s both;
  }

  @keyframes animate-svg-stroke-25 {
    0% {
      stroke-dashoffset: 169.09112548828125px;
      stroke-dasharray: 169.09112548828125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 169.09112548828125px;
    }
  }

  @keyframes animate-svg-fill-25 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-25 {
    animation: animate-svg-stroke-25 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        1.92s both,
      animate-svg-fill-25 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2s both;
  }

  @keyframes animate-svg-stroke-26 {
    0% {
      stroke-dashoffset: 21.403831481933594px;
      stroke-dasharray: 21.403831481933594px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 21.403831481933594px;
    }
  }

  @keyframes animate-svg-fill-26 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-26 {
    animation: animate-svg-stroke-26 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 2s
        both,
      animate-svg-fill-26 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.05s both;
  }

  @keyframes animate-svg-stroke-27 {
    0% {
      stroke-dashoffset: 201.80538940429688px;
      stroke-dasharray: 201.80538940429688px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 201.80538940429688px;
    }
  }

  @keyframes animate-svg-fill-27 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-27 {
    animation: animate-svg-stroke-27 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.08s both,
      animate-svg-fill-27 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.1s both;
  }

  @keyframes animate-svg-stroke-28 {
    0% {
      stroke-dashoffset: 156.39723205566406px;
      stroke-dasharray: 156.39723205566406px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 156.39723205566406px;
    }
  }

  @keyframes animate-svg-fill-28 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-28 {
    animation: animate-svg-stroke-28 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.16s both,
      animate-svg-fill-28 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.1500000000000004s both;
  }

  @keyframes animate-svg-stroke-29 {
    0% {
      stroke-dashoffset: 172.34579467773438px;
      stroke-dasharray: 172.34579467773438px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 172.34579467773438px;
    }
  }

  @keyframes animate-svg-fill-29 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-29 {
    animation: animate-svg-stroke-29 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.24s both,
      animate-svg-fill-29 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.2s both;
  }

  @keyframes animate-svg-stroke-30 {
    0% {
      stroke-dashoffset: 77.94703674316406px;
      stroke-dasharray: 77.94703674316406px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94703674316406px;
    }
  }

  @keyframes animate-svg-fill-30 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-30 {
    animation: animate-svg-stroke-30 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.32s both,
      animate-svg-fill-30 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.25s both;
  }

  @keyframes animate-svg-stroke-31 {
    0% {
      stroke-dashoffset: 149.4540557861328px;
      stroke-dasharray: 149.4540557861328px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.4540557861328px;
    }
  }

  @keyframes animate-svg-fill-31 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-31 {
    animation: animate-svg-stroke-31 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.4s both,
      animate-svg-fill-31 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.3s both;
  }

  @keyframes animate-svg-stroke-32 {
    0% {
      stroke-dashoffset: 99.65015411376953px;
      stroke-dasharray: 99.65015411376953px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 99.65015411376953px;
    }
  }

  @keyframes animate-svg-fill-32 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-32 {
    animation: animate-svg-stroke-32 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.48s both,
      animate-svg-fill-32 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.35s both;
  }

  @keyframes animate-svg-stroke-33 {
    0% {
      stroke-dashoffset: 65.21340560913086px;
      stroke-dasharray: 65.21340560913086px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 65.21340560913086px;
    }
  }

  @keyframes animate-svg-fill-33 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-33 {
    animation: animate-svg-stroke-33 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.56s both,
      animate-svg-fill-33 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.4000000000000004s both;
  }

  @keyframes animate-svg-stroke-34 {
    0% {
      stroke-dashoffset: 137.3790283203125px;
      stroke-dasharray: 137.3790283203125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.3790283203125px;
    }
  }

  @keyframes animate-svg-fill-34 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-34 {
    animation: animate-svg-stroke-34 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.64s both,
      animate-svg-fill-34 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.45s both;
  }

  @keyframes animate-svg-stroke-35 {
    0% {
      stroke-dashoffset: 132.4117431640625px;
      stroke-dasharray: 132.4117431640625px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 132.4117431640625px;
    }
  }

  @keyframes animate-svg-fill-35 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-35 {
    animation: animate-svg-stroke-35 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.72s both,
      animate-svg-fill-35 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.5s both;
  }

  @keyframes animate-svg-stroke-36 {
    0% {
      stroke-dashoffset: 125.07685089111328px;
      stroke-dasharray: 125.07685089111328px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 125.07685089111328px;
    }
  }

  @keyframes animate-svg-fill-36 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-36 {
    animation: animate-svg-stroke-36 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.8000000000000003s both,
      animate-svg-fill-36 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.55s both;
  }

  @keyframes animate-svg-stroke-37 {
    0% {
      stroke-dashoffset: 76.5px;
      stroke-dasharray: 76.5px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 76.5px;
    }
  }

  @keyframes animate-svg-fill-37 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-37 {
    animation: animate-svg-stroke-37 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.88s both,
      animate-svg-fill-37 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.6s both;
  }

  @keyframes animate-svg-stroke-38 {
    0% {
      stroke-dashoffset: 65.21348190307617px;
      stroke-dasharray: 65.21348190307617px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 65.21348190307617px;
    }
  }

  @keyframes animate-svg-fill-38 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-38 {
    animation: animate-svg-stroke-38 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.96s both,
      animate-svg-fill-38 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.6500000000000004s both;
  }

  @keyframes animate-svg-stroke-39 {
    0% {
      stroke-dashoffset: 97.51171875px;
      stroke-dasharray: 97.51171875px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 97.51171875px;
    }
  }

  @keyframes animate-svg-fill-39 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-39 {
    animation: animate-svg-stroke-39 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.04s both,
      animate-svg-fill-39 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.7s both;
  }

  @keyframes animate-svg-stroke-40 {
    0% {
      stroke-dashoffset: 149.4541778564453px;
      stroke-dasharray: 149.4541778564453px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.4541778564453px;
    }
  }

  @keyframes animate-svg-fill-40 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-40 {
    animation: animate-svg-stroke-40 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.12s both,
      animate-svg-fill-40 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.75s both;
  }

  @keyframes animate-svg-stroke-41 {
    0% {
      stroke-dashoffset: 97.51155853271484px;
      stroke-dasharray: 97.51155853271484px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 97.51155853271484px;
    }
  }

  @keyframes animate-svg-fill-41 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-41 {
    animation: animate-svg-stroke-41 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.2s both,
      animate-svg-fill-41 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.8s both;
  }

  @keyframes animate-svg-stroke-42 {
    0% {
      stroke-dashoffset: 77.94706726074219px;
      stroke-dasharray: 77.94706726074219px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94706726074219px;
    }
  }

  @keyframes animate-svg-fill-42 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-42 {
    animation: animate-svg-stroke-42 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.2800000000000002s both,
      animate-svg-fill-42 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.8500000000000005s both;
  }

  @keyframes animate-svg-stroke-43 {
    0% {
      stroke-dashoffset: 137.3792266845703px;
      stroke-dasharray: 137.3792266845703px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.3792266845703px;
    }
  }

  @keyframes animate-svg-fill-43 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-43 {
    animation: animate-svg-stroke-43 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.36s both,
      animate-svg-fill-43 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        2.9000000000000004s both;
  }

  @keyframes animate-svg-stroke-44 {
    0% {
      stroke-dashoffset: 201.80557250976562px;
      stroke-dasharray: 201.80557250976562px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 201.80557250976562px;
    }
  }

  @keyframes animate-svg-fill-44 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-44 {
    animation: animate-svg-stroke-44 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.44s both,
      animate-svg-fill-44 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 2.95s both;
  }

  @keyframes animate-svg-stroke-45 {
    0% {
      stroke-dashoffset: 92.25350952148438px;
      stroke-dasharray: 92.25350952148438px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 92.25350952148438px;
    }
  }

  @keyframes animate-svg-fill-45 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-45 {
    animation: animate-svg-stroke-45 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.52s both,
      animate-svg-fill-45 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3s both;
  }

  @keyframes animate-svg-stroke-46 {
    0% {
      stroke-dashoffset: 150.455322265625px;
      stroke-dasharray: 150.455322265625px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 150.455322265625px;
    }
  }

  @keyframes animate-svg-fill-46 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-46 {
    animation: animate-svg-stroke-46 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.6s both,
      animate-svg-fill-46 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.05s both;
  }

  @keyframes animate-svg-stroke-47 {
    0% {
      stroke-dashoffset: 149.45416259765625px;
      stroke-dasharray: 149.45416259765625px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.45416259765625px;
    }
  }

  @keyframes animate-svg-fill-47 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-47 {
    animation: animate-svg-stroke-47 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.68s both,
      animate-svg-fill-47 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.1000000000000005s both;
  }

  @keyframes animate-svg-stroke-48 {
    0% {
      stroke-dashoffset: 172.3463897705078px;
      stroke-dasharray: 172.3463897705078px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 172.3463897705078px;
    }
  }

  @keyframes animate-svg-fill-48 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-48 {
    animation: animate-svg-stroke-48 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.7600000000000002s both,
      animate-svg-fill-48 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.1500000000000004s both;
  }

  @keyframes animate-svg-stroke-49 {
    0% {
      stroke-dashoffset: 137.3793487548828px;
      stroke-dasharray: 137.3793487548828px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.3793487548828px;
    }
  }

  @keyframes animate-svg-fill-49 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-49 {
    animation: animate-svg-stroke-49 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.84s both,
      animate-svg-fill-49 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.2s both;
  }

  @keyframes animate-svg-stroke-50 {
    0% {
      stroke-dashoffset: 204.0570831298828px;
      stroke-dasharray: 204.0570831298828px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 204.0570831298828px;
    }
  }

  @keyframes animate-svg-fill-50 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-50 {
    animation: animate-svg-stroke-50 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.92s both,
      animate-svg-fill-50 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.25s both;
  }

  @keyframes animate-svg-stroke-51 {
    0% {
      stroke-dashoffset: 149.45440673828125px;
      stroke-dasharray: 149.45440673828125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.45440673828125px;
    }
  }

  @keyframes animate-svg-fill-51 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-51 {
    animation: animate-svg-stroke-51 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 4s
        both,
      animate-svg-fill-51 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.3s both;
  }

  @keyframes animate-svg-stroke-52 {
    0% {
      stroke-dashoffset: 77.94715881347656px;
      stroke-dasharray: 77.94715881347656px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 77.94715881347656px;
    }
  }

  @keyframes animate-svg-fill-52 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-52 {
    animation: animate-svg-stroke-52 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.08s both,
      animate-svg-fill-52 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.3500000000000005s both;
  }

  @keyframes animate-svg-stroke-53 {
    0% {
      stroke-dashoffset: 137.37921142578125px;
      stroke-dasharray: 137.37921142578125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.37921142578125px;
    }
  }

  @keyframes animate-svg-fill-53 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-53 {
    animation: animate-svg-stroke-53 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.16s both,
      animate-svg-fill-53 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.4000000000000004s both;
  }

  @keyframes animate-svg-stroke-54 {
    0% {
      stroke-dashoffset: 97.51163482666016px;
      stroke-dasharray: 97.51163482666016px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 97.51163482666016px;
    }
  }

  @keyframes animate-svg-fill-54 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-54 {
    animation: animate-svg-stroke-54 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.24s both,
      animate-svg-fill-54 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.45s both;
  }

  @keyframes animate-svg-stroke-55 {
    0% {
      stroke-dashoffset: 92.25311279296875px;
      stroke-dasharray: 92.25311279296875px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 92.25311279296875px;
    }
  }

  @keyframes animate-svg-fill-55 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-55 {
    animation: animate-svg-stroke-55 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.32s both,
      animate-svg-fill-55 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.5s both;
  }

  @keyframes animate-svg-stroke-56 {
    0% {
      stroke-dashoffset: 150.4551544189453px;
      stroke-dasharray: 150.4551544189453px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 150.4551544189453px;
    }
  }

  @keyframes animate-svg-fill-56 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-56 {
    animation: animate-svg-stroke-56 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.4s both,
      animate-svg-fill-56 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.55s both;
  }

  @keyframes animate-svg-stroke-57 {
    0% {
      stroke-dashoffset: 149.45437622070312px;
      stroke-dasharray: 149.45437622070312px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 149.45437622070312px;
    }
  }

  @keyframes animate-svg-fill-57 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-57 {
    animation: animate-svg-stroke-57 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.48s both,
      animate-svg-fill-57 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.6000000000000005s both;
  }

  @keyframes animate-svg-stroke-58 {
    0% {
      stroke-dashoffset: 204.0571746826172px;
      stroke-dasharray: 204.0571746826172px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 204.0571746826172px;
    }
  }

  @keyframes animate-svg-fill-58 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-58 {
    animation: animate-svg-stroke-58 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.5600000000000005s both,
      animate-svg-fill-58 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.6500000000000004s both;
  }

  @keyframes animate-svg-stroke-59 {
    0% {
      stroke-dashoffset: 65.21348571777344px;
      stroke-dasharray: 65.21348571777344px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 65.21348571777344px;
    }
  }

  @keyframes animate-svg-fill-59 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-59 {
    animation: animate-svg-stroke-59 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.64s both,
      animate-svg-fill-59 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.7s both;
  }

  @keyframes animate-svg-stroke-60 {
    0% {
      stroke-dashoffset: 76.5px;
      stroke-dasharray: 76.5px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 76.5px;
    }
  }

  @keyframes animate-svg-fill-60 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-60 {
    animation: animate-svg-stroke-60 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.72s both,
      animate-svg-fill-60 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.75s both;
  }

  @keyframes animate-svg-stroke-61 {
    0% {
      stroke-dashoffset: 169.0914764404297px;
      stroke-dasharray: 169.0914764404297px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 169.0914764404297px;
    }
  }

  @keyframes animate-svg-fill-61 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-61 {
    animation: animate-svg-stroke-61 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.8s both,
      animate-svg-fill-61 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.8s both;
  }

  @keyframes animate-svg-stroke-62 {
    0% {
      stroke-dashoffset: 169.0914764404297px;
      stroke-dasharray: 169.0914764404297px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 169.0914764404297px;
    }
  }

  @keyframes animate-svg-fill-62 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-62 {
    animation: animate-svg-stroke-62 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.88s both,
      animate-svg-fill-62 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.8500000000000005s both;
  }

  @keyframes animate-svg-stroke-63 {
    0% {
      stroke-dashoffset: 137.37939453125px;
      stroke-dasharray: 137.37939453125px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 137.37939453125px;
    }
  }

  @keyframes animate-svg-fill-63 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-63 {
    animation: animate-svg-stroke-63 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        4.96s both,
      animate-svg-fill-63 0.5s cubic-bezier(0.47, 0, 0.745, 0.715)
        3.9000000000000004s both;
  }

  @keyframes animate-svg-stroke-64 {
    0% {
      stroke-dashoffset: 176.84861755371094px;
      stroke-dasharray: 176.84861755371094px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 176.84861755371094px;
    }
  }

  @keyframes animate-svg-fill-64 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-64 {
    animation: animate-svg-stroke-64 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        5.04s both,
      animate-svg-fill-64 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 3.95s both;
  }

  @keyframes animate-svg-stroke-65 {
    0% {
      stroke-dashoffset: 125.07725524902344px;
      stroke-dasharray: 125.07725524902344px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 125.07725524902344px;
    }
  }

  @keyframes animate-svg-fill-65 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-65 {
    animation: animate-svg-stroke-65 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        5.12s both,
      animate-svg-fill-65 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 4s both;
  }

  @keyframes animate-svg-stroke-66 {
    0% {
      stroke-dashoffset: 73.11817169189453px;
      stroke-dasharray: 73.11817169189453px;
    }

    100% {
      stroke-dashoffset: 0;
      stroke-dasharray: 73.11817169189453px;
    }
  }

  @keyframes animate-svg-fill-66 {
    0% {
      fill: transparent;
    }

    100% {
      fill: rgb(0, 0, 0);
    }
  }

  & .svg-elem-two-66 {
    animation: animate-svg-stroke-66 0.7s cubic-bezier(0.47, 0, 0.745, 0.715)
        5.2s both,
      animate-svg-fill-66 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) 4.05s both;
  }
  @media ${device.mobileL} {
    & svg {
      transform: scale(1.1);
    }
  }
`;
