import styled from "styled-components";
import { device } from "../../styles/device";

// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 428px
// Tablet - 768px
// Laptop - 1024px
// min Laptop L - 1440px
// min 4K - 2560px

export const Container = styled.div`
  width: 90vw;
  max-width: 1120px;
  margin: 0px auto 2rem;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 9;
  padding-top: 30px;
`;

export const Button = styled.div`
  background: transparent;
  border-color: transparent;
  font-size: 1.4rem;
  text-transform: capitalize;
  margin: 2rem 0;
  letter-spacing: 1px;
  padding: 0.375rem 1.75rem;
  color: var(--clr-gold);
  cursor: pointer;
  transition: var(--transition);
  border-radius: var(--radius);
  border: none;
  :hover {
    color: #151515;
    box-shadow: 0 2px #151515;
  }
  &.active-btn {
    color: #151515;
    box-shadow: 0 2px #151515;
  }

  @media ${device.mobileL} {
    padding: 0.1rem 0.58rem;
  }
  @media ${device.mobileM} {
    padding: 0.1rem 0.5rem;
    font-size: 20px;
  }
  @media ${device.mobileS} {
    padding: 0.1rem 0.4rem;
    font-size: 18px;
  }
`;
