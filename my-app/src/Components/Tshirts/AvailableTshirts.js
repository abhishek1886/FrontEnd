import React, { useContext } from "react";

import classes from "./AvailableTshirts.module.css";
import AvailableTshirtsContext from "../store/availableTshirt-context";
import Tshirts from "./Tshirts";

const AvailableTshirts = (props) => {
  const availableTshirtCtx = useContext(AvailableTshirtsContext);

  return (
    <div className={classes.tshirts}>
      <ul>
        {availableTshirtCtx.tshirts.map((tshirt) => (
          <Tshirts
            name={tshirt.name}
            description={tshirt.description}
            price={tshirt.price}
            sQuantity={tshirt.sQuantity}
            mQuantity={tshirt.mQuantity}
            lQuantity={tshirt.lQuantity}
            id={tshirt.id}
            key={tshirt.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default AvailableTshirts;
