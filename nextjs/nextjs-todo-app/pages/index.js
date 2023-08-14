import { Fragment, useEffect, useState } from "react";

import Header from "@/components/Header";
import Todo from "@/components/Todo";

export default function Home(props) {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = async (todoData) => {
    const data = { title: todoData, isCompleted: false };

    const response = await fetch("/api/add-todo", {
      method: "POST",
      body: JSON.stringify({ title: todoData, isCompleted: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    setTodos(prev => ([ {...data, id: resData._id }, ...prev ]));
  };

  useEffect(() => {
    setTodos(props.todoData);
  }, [])

  return (
    <Fragment>
      <Header />

      <main>
        <Todo onClick={addTodoHandler} todoData={todos} />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/todo-data");

  const res = await response.json();
  const data = res.data;
  

  return {
    props: {
      todoData: data.reverse().map(todo => ({
        title: todo.title,
        isCompleted: todo.isCompleted,
        id: todo._id
      }))
    },
    revalidate: 1,
  };
}
