import React, { useState } from 'react'

const [statements, setStatement] = useState([
  {name : "Islom Shahobiddinov",
  food : "Pitsa",
    price: "50000",
    num: "2",
    amount: "100000",
  
  }
])
export default function Statement() {
  return (
    <div>Statement</div>
  )
}
