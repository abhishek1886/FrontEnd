import React from "react";

import classes from './Products.module.css'
import ElectronicItem from "./ElectronicItems";
import SkincareItem from "./SkincareItems";
import FoodItems from "./FoodItems";

const Products = (props) => {
  const electronicsData = props.productsData.filter(
    (product) => product.category === "electronics"
  );
  const foodData = props.productsData.filter(
    (product) => product.category === "foodItems"
  );
  const skincareData = props.productsData.filter(
    (product) => product.category === "skincareItem"
  );
  return (
    <div className={classes.products}>
      <ElectronicItem productsData={electronicsData} />
      <FoodItems productsData={foodData} />
      <SkincareItem productsData={skincareData} />
    </div>
  );
};

export default Products;
