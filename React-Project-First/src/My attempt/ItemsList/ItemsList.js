import React from "react";

import Items from "./Items";
import "./ItemsList.css";

const ItemsList = (props) => {
  
  const itemsJsxList = props.userData.map((data) => {
    return <Items name={data.name} age={data.age} key={data.id} />;
  });

  return (
    <div className="items-list-display">
      <ul className="items-list">{itemsJsxList}</ul>
    </div>
  );
};

export default ItemsList;
