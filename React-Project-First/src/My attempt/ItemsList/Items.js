import React from 'react';

import './Items.css'

const Items = (props) => {
  console.log(props.name)

  return (

      <li className='items'>
        {`${props.name} ${props.age}`}
      </li>

  );
}

export default Items;