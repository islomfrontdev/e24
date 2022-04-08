import React, { useState } from "react";

export default function Statement() {
  const [statements, setStatement] = useState([
    {
      name: "Islom Shahobiddinov",
      food: "Pitsa",
      price: "50000",
      num: "2",
      amount: "100000",
    },
  ]);
  return <div>Statement</div>;
}
