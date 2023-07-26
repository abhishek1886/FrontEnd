import React, { useState } from "react";

import classes from "./AddMovies.module.css";

const AddMovies = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    openingText: "",
    releaseDate: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const inputMovieData = {
      ...formData,
      id: Math.random().toString(),
    };

    // props.onSubmit(inputMovieData);
    console.log(inputMovieData);
    setFormData({
      title: "",
      openingText: "",
      releaseDate: "",
    });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        value={formData.title}
        onChange={inputChangeHandler}
      />
      <label htmlFor="openingText">Opening Text</label>
      <textarea
        id="openingText"
        name="openingText"
        value={formData.openingText}
        onChange={inputChangeHandler}
      ></textarea>
      <label htmlFor="date">Release Date</label>
      <input
        type="date"
        id="date"
        name="releaseDate"
        value={formData.releaseDate}
        onChange={inputChangeHandler}
      />
      <button type="submit">Add Movies</button>
    </form>
  );
};

export default AddMovies;
