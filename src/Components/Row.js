import React, { useState, useEffect } from "react";
import axios from "../Utils/axios";
import "../Stylesheets/Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  return <div className='row'></div>;
};

export default Row;
