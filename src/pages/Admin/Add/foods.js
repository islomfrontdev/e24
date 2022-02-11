import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import MainButton from '../../../components/MainButton/MainButton';
import { CategoryContext, ProductsContext } from '../../../UseContext/ProductsContext';

export default function Foods() {

  const { products, setProducts } = useContext(ProductsContext);
  const { register, reset, handleSubmit } = useForm({
    defaultValues: {},
  });
  const submitFoods = (data) => {
    const t = [...products];
    t.push(data);
    setProducts(t);
    console.log(t);
    reset();
  };
  const { categories, setCategory } = useContext(CategoryContext);

  return (
    <form onSubmit={handleSubmit(submitFoods)}>
    <div className="row mb-5">
      <div className="col-md-6 mb-3">
        <input
          className="form-control w-100"
          placeholder="Rasmga Yo'l"
          {...register("img", { required: true })}
        ></input>
      </div>
      <div className="col-md-6 mb-3">
        <input
          className="form-control w-100"
          placeholder="Taom nomi"
          {...register("title", { required: true })}
        ></input>
      </div>
      <div className="col-12  mb-3">
        <textarea
          className="w-100 form-control"
          rows="5"
          {...register("def", { required: true })}
        ></textarea>
      </div>
      <div className="col-md-6 mb-3">
        <input
          className="form-control w-100"
          placeholder="Taom narxi"
          type="number"
          {...register("price", { required: true })}
        ></input>
      </div>
      <div className="col-md-6 mb-3">
        <select
          className="w-100 form-control outline-none p-2"
          {...register("category", { required: true })}
        >
          {categories.map((c) => (
            <option>{c}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="text-center">
      <MainButton title={"Qoshish"} />
    </div>
  </form>
  )
}
