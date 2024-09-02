"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("../src/app/data.json")
      .then((response) => response.json())
      .then((data) => setShoes(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <Card
            source={shoe.source}
            title={shoe.title}
            price={shoe.price}
            brand={shoe.brand}
            colors={shoe.colors}
            rarity={shoe.rarity}
            date={shoe.date}
          />
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
