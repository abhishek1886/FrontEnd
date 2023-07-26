import React, { useState, useEffect } from "react";

import MoviesList from "./MoviesList";
import "../App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [id, setId] = useState();

  async function fetchMovieHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film");
      if (!response.ok) {
        throw new Error("Something went wrong! ...Retrying.");
      }
      const movieData = await response.json();

      const transformedData = movieData.results.map((data) => {
        return {
          id: data.episode_id,
          title: data.title,
          openingText: data.opening_crawl,
          releaseDate: data.release_date,
        };
      });
      setMovies(transformedData);
    } catch (err) {
      setError(err.message);
      setRetrying(true);
      const intervalId = setTimeout(() => {
        fetchMovieHandler();
        console.log(intervalId);
      }, 5000);
      setId(intervalId);
    }
    setIsLoading(false);
  }

  // useEffect(() => {
  //   return () => {
  //     clearTimeout(intervalId)
  //   }
  // }, [intervalId])

  const cancelRetrying = () => {
    setError(null);
    setRetrying(false);
    console.log(id);
    clearTimeout(id);
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = (
      <>
        <p>{error}</p>
        {retrying && <button onClick={cancelRetrying}>Cancel</button>}
      </>
    );
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
