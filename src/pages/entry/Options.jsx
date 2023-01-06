import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";

import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data));
  }, [optionType]);
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  return (
    <Row>
      {items.map(
        (item) => (
          <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
          />
        ),
        []
      )}
    </Row>
  );
}
