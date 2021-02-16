import axios from "../Utils/axios";
import React, { useState, useEffect } from "react";
import "../Stylesheets/Banner.css";
import requests from "../Utils/Requests";

import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const [trailerUrl, settrailerUrl] = useState("");

  const opts = {
    height: "1000px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.log(movie.title);
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      console.log(movie?.original_name);
      movieTrailer(movie?.title || movie?.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((e) => console.log(e.message));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchDrama);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, [requests.fetchTopRated]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
        backgroundPosition: "center center",
      }}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* <div className='banner__buttons'>
          <button className='banner__button' onClick={() => handleClick(movie)}>
            Play
          </button>
        </div> */}
        <h1 className='banner__description'>{movie?.overview}</h1>
      </div>
      <div className='banner--fadebottom' />
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </header>
  );
};

export default Banner;
