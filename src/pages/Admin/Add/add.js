import React from "react";

import Category from "./category";
import Foods from "./foods";

export default function AddForm() {
  return (
    <>
      <h3>Kategoriya Qo'shish</h3>
      <Category />
      <h3>Taom Qo'shish</h3>

      <Foods />
    </>
  );
}
