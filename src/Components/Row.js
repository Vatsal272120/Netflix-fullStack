import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import "../Stylesheets/Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
      {/* container -> posters - films */}
      <div className='row_posters'>
        {" "}
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                //onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={` ${baseUrl}${
                  isLargeRow ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              />
            )
        )}{" "}
      </div>
      {/* posters -multiple*/}
    </div>
  );
};

export default Row;
