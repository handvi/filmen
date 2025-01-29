/* eslint-disable no-unused-vars */
import React from "react";
import NavbarUp from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MovieList from "./components/MovieList";
import FilmenExperience from "./components/FilmenExperience";
import ForAnswer from "./components/ForAnswer";
import ChoosePlan from "./components/ChoosePlan";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <NavbarUp />
      <HeroSection />
      <MovieList />
      <FilmenExperience />
      <ForAnswer />
      <ChoosePlan />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
