// components/ShoeList.js
"use client";

import { useEffect, useState } from "react";
import { Image } from "next/image";

const ShoeList = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("/api/shoes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setShoes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchShoes();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Shoe List</h1>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>
            <h2>{shoe.name}</h2>
            <p>Price: ${shoe.price}</p>
            <p>Description: {shoe.description}</p>
            {shoe.imageUrl && <Image src={shoe.imageUrl} alt={shoe.name} />}
            <p>Brand: {shoe.brand}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;
