import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [timeoutId, setTimeoutId] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const movieData = data.results.map((data) => {
          return {
            id: data.episode_id,
            title: data.title,
            openingText: data.opening_crawl,
            releaseDate: data.release_date,
          };
        });
        setMovies(movieData);
      });
  }, []);

  const fetchMovieHandler = useCallback(async () => {
    {
      setIsLoading(true);
      setError(null);
      setMovies([]);
      try {
        const response = await fetch("https://swapi.dev/api/films");
        if (!response.ok) {
          throw new Error("Something went wrong!...Retrying.");
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
        const id = setTimeout(() => {
          fetchMovieHandler();
        }, 5000);
        setTimeoutId(id);
      }
      setIsLoading(false);
    }
  }, []);

  const cancelButtonHandler = useCallback(() => {
    setError(null);
    setRetrying(false);
    clearTimeout(timeoutId);
  }, []);

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = (
      <>
        <p>{error}</p>
        {retrying && <button onClick={cancelButtonHandler}>Cancel</button>}
      </>
    );
  }

  if (movies.length === 0 && isLoading) {
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
