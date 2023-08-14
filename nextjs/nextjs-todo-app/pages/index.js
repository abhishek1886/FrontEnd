import Header from "@/components/Header";
import Todo from "@/components/Todo";
import { Fragment } from "react";

export default function Home(props) {

  const addTodoHandler = async (todoData) => {
    const response = await fetch("/api/add-todo", {
      method: "POST",
      body: JSON.stringify({ title: todoData, isCompleted: false }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <Fragment>
      <Header />

      <main>
        <Todo onClick={addTodoHandler} todoData={props.todoData} />
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
  };
}
