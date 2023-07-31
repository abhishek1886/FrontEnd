import React, { useContext, useState, useEffect } from "react";

import classes from "./AvailableTshirts.module.css";
import AvailableTshirtsContext from "../../store/availableTshirt-context";
import Tshirts from "./Tshirts";

const AvailableTshirts = (props) => {
  const [availableTshirtsFlase, setAvailableTshirtsFalse] = useState(true);

  const availableTshirtCtx = useContext(AvailableTshirtsContext);
  
  useEffect(() => {
    if(availableTshirtCtx.tshirts.length > 0) setAvailableTshirtsFalse(false);
    else setAvailableTshirtsFalse(true);
  }, [availableTshirtCtx.tshirts])

  return (
    <div className={classes.tshirts}>
      {availableTshirtsFlase && <h3>Please add tshirts!</h3>}
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
