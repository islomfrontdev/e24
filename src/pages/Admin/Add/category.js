import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import MainButton from "../../../components/MainButton/MainButton";
import { CategoryContext } from "../../../UseContext/ProductsContext";
export default function Category() {
  const { categories, setCategory } = useContext(CategoryContext);

  const [name, setName] = useState("");
  const submitCategory = (e) => {
    e.preventDefault();
    const t = [...categories];
    t.push(name);
    console.log(t);
    setCategory(t);
    setName("");
  };
  return (
    <form onSubmit={submitCategory}>
      <div className="row">
        <div className="col-md-9 mb-3">
          <input
            className="form-control w-100"
            placeholder="Kategoriya"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="col-12 col-md-3">
          <MainButton title={"Qoshish"} />
        </div>
      </div>
    </form>
  );
}
