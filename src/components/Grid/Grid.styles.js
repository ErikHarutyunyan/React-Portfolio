import styled from "styled-components";
import { device } from "../../styles/device";

// Mobile S - 320px
// Mobile M - 375px
// Mobile L - 428px
// Tablet - 768px
// Laptop - 1024px
// min Laptop L - 1440px
// min 4K - 2560px

export const Wrapper = styled.div`
  padding: 3rem 0px 5rem 0;
`;
export const Contents = styled.div`
  width: 90vw;
  max-width: 1000px;
  margin: 0px auto 2rem;
  display: grid;
  gap: 3rem 2rem;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media ${device.laptopM} {
    max-width: 960px;
  }
  @media ${device.laptopL} {
    max-width: 1080px;
  }
`;
export const Title = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h2 {
    margin-bottom: 2rem;
  }
`;
export const Underline = styled.div`
  height: 0.2rem;
  width: 7rem;
  background: var(--black-design);
  margin: -1rem auto 0px;
`;
