"use client";

import { Header } from "../components/Header";
import { MovieBox } from "../components/Movide-box";
import React, { useState } from "react";
import axios from "axios";
import { AddMovieModal } from "../components/AddMovieModal";

export default function Home() {
  const [openAddReview, setOpenAddReview] = useState(false);
  const [openAddMovie, setOpenAddMovie] = useState(false);
  const [movies, setMovies] = useState<any[]>([]);

  const handleGetMovies = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/movies");
      setMovies(data);
    } catch (error) {}
  };

  const handleMovieClick = () => {};

  React.useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <AddMovieModal
        handleGetMovies={handleGetMovies}
        show={openAddMovie}
        setShowModal={setOpenAddMovie}
      />
      <Header
        setOpenAddReview={setOpenAddReview}
        setOpenAddMovie={setOpenAddMovie}
      />
      <div className="">
        <h2 className="text-black p-4">The best movie reviews site!</h2>
        <div className="p-4 pt-0 pb-5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for your favourite movie"
            required
            style={{ width: "20rem" }}
            name="name"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          {movies?.map((e) => (
            <div
              key={e?.id}
              style={{ cursor: "pointer" }}
              onClick={handleMovieClick}
            >
              <MovieBox
                name={e?.name}
                rating={e?.rating ?? 0}
                date={e?.releaseDate}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
