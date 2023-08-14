import React, { useEffect, useState } from "react";

const TodoItem = (props) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(props.isCompleted)
  }, []);

  const updateTodoHandler = async () => {
    setDone(true);

    const response = await fetch("http://localhost:3000/api/update-todo", {
      method: "POST",
      body: JSON.stringify({
        title: props.title,
        _id: props.id,
        isCompleted: true,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <li
      className="flex mb-4 group items-center border-b-2 border-[#766186] pb-2"
      id={props.id}
    >
      {done ? <p className="w-full line-through text-green-500">{props.title}</p> : <p className="w-full text-grey-darkest">{props.title}</p>}
      
      <button
        className="hidden group-hover:block flex-no-shrink px-2 py-1 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
        onClick={updateTodoHandler}
      >
        Done
      </button>
      <button className="hidden group-hover:block flex-no-shrink px-2 py-1 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
