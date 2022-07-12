import styled from "styled-components"

export const Wrapper = styled.article`
  transition: transform 0.3s ease;
  box-shadow: var(--shadow-2);
  position: relative;
  z-index: 9;
  :hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.div`
  display: block;
  height: 15rem;
  max-width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
`;

export const Footer = styled.div`
  text-align: center;
  padding: 1rem 1.25rem;
  background-color: white;
  h5 {
    margin-bottom: 0px;
    color: var(--grey-900);
    font-weight: 500;
  }
`;


