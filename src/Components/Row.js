import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import "../Stylesheets/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "1000px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((e) => console.log(e.message));
    }
  };

  console.log(trailerUrl);

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
                onClick={() => handleClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={` ${baseUrl}${
                  isLargeRow ? movie.backdrop_path : movie.poster_path
                }`}
                alt={movie.name}
              />
            )
        )}{" "}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* posters -multiple*/}
    </div>
  );
};

export default Row;
