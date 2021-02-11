import React from "react";
import "../Stylesheets/HomeScreen.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Row from "./Row";

import requests from "./../Utils/Requests";

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* Nav */}
      <Navbar />
      <Banner />
      {/* Rows */}
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
      <Row title='Now Playing' fetchUrl={requests.fetchNowPlaying} />
      {/* Banner */}
    </div>
  );
};

export default HomeScreen;
