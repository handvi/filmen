/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { fetchMoviesByCategory } from "../api/movieApi";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../assets/styles/MovieList.css";


function MovieList() {
  const [movies, setMovies] = useState({
    horror: [],
    action: [],
    series: [],
    movie: [],
  });

  const categories = ["horror", "action", "series", "movie"];

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = {};
      for (let category of categories) {
        const movieData = await fetchMoviesByCategory(category);
        moviesData[category] = movieData.slice(0, 4); // Ambil 4 poster per kategori
      }
      setMovies(moviesData);
    };

    getMovies();
  }, []);

  return (
    <div className="black-background">
      <Container className="movie-list-container">
        <div className="movie-list-header">
          <h2>Discover Movies by Category</h2>
          <p>Explore different genres and find your next favorite movie!</p>
        </div>

        <Row className="justify-content-center">
          {categories.map((category) => (
            <Col key={category} xs={12} sm={6} md={3} className="mb-4 d-flex justify-content-center">
              <Card className="movie-card">
                <Card.Body className="p-2">
                  <Row className="g-2">
                    {movies[category]?.map((movie) => (
                      <Col key={movie.imdbID} xs={6} className="d-flex justify-content-center">
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          className="movie-poster"
                        />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
                <div className="category-footer">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
