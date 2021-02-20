import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovie] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            movie.backdrop_path !== null && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
                // onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
