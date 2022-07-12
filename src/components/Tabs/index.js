import React, { useState } from "react";
// Styles
import { Container, Button } from "./Tabs.styles";
const Tabs = ({ categories, filterItems }) => {
  const [value, setValue] = useState(0);

  return (
    <Container>
      {categories.map((category, id) => {
        return (
          <Button
            key={id}
            className={`${id === value ? "active-btn" : ""}`}
            onClick={() => {
              setValue(id);
              filterItems(category);
            }}
          >
            {category}
          </Button>
        );
      })}
    </Container>
  );
};

export default Tabs;
