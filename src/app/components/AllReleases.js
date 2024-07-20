"use client";

import service from "../../appwrite/config.js";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function AllReleases() {
  const [unreleased, setUnreleased] = useState([]);

  useEffect(() => {
    // Fetch data on component mount
    service
      .getReleases([])
      .then((response) => {
        if (response) {
          setUnreleased(response.documents);
        }
      })
      .catch((error) => {
        console.error("Error fetching releases:", error);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <>
      <div className="flex gap-10 flex-wrap justify-center p-6 max-w-[920px] m-auto">
        {unreleased.map((date) => (
          <div key={date.$id}>
            <Card {...date} />
          </div>
        ))}
      </div>
    </>
  );
}
