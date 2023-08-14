import React from "react";

const TodoItem = (props) => {
  return (

      <li className="flex mb-4 items-center border-b-2 border-[#766186] pb-2" id={props.id}>
        <p className="w-full text-grey-darkest">
          {props.title}
        </p>
        <button className="flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
          Done
        </button>
        <button className="flex-no-shrink px-2 py-1 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
          Remove
        </button>
      </li>

  );
};

export default TodoItem;
