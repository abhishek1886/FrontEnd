import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import AddMovies from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [retrying, setRetrying] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    {
      setIsLoading(true);
      setError(null);
      setMovies([]);
      try {
        const response = await fetch(
          "https://react-http-7ab92-default-rtdb.firebaseio.com/movies.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!...Retrying.");
        }

        const movieData = await response.json();
        let loadedMovies = [];

        for (let key in movieData) {
          loadedMovies.push({
            id: key,
            title: movieData[key].title,
            openingText: movieData[key].openingText,
            releaseDate: movieData[key].releaseDate,
          });
        }

        // const transformedData = movieData.results.map((data) => {
        //   return {
        //     id: data.episode_id,
        //     title: data.title,
        //     openingText: data.opening_crawl,
        //     releaseDate: data.release_date,
        //   };
        // });

        setMovies(loadedMovies);
      } catch (err) {
        setError(err.message);
        setRetrying(true);
        const id = setTimeout(() => {
          fetchMovieHandler();
        }, 5000);
        console.log(id);
        setTimeoutId(id);
      }
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const cancelButtonHandler = useCallback(() => {
    setError(null);
    setRetrying(false);
    clearTimeout(timeoutId);
    console.log(timeoutId);
  }, [timeoutId]);

  const deleteButtonHandler = async (id) => {
    console.log(id);
    await fetch(
      `https://react-http-7ab92-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE",
      }
    );
    fetchMovieHandler();
  };

  const inputMovies = async (movie) => {
    const response = await fetch(
      "https://react-http-7ab92-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    fetchMovieHandler();
  };

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} onDelete={deleteButtonHandler} />;
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
        <AddMovies onSubmit={inputMovies} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
