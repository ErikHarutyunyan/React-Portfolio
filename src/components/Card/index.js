import React from "react";

import { Wrapper, Footer, Image } from "./Card.styles";

const Card = ({ title, img, url }) => {
  return (
    <Wrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image>
          <img src={img} alt={title} />
        </Image>
        <Footer>
          <h5>{title}</h5>
        </Footer>
      </a>
    </Wrapper>
  );
};

export default Card;
