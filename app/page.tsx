"use client";

import { Input } from "@nextui-org/react";
import { MovieBox } from "../components/MovieBox";
import React from "react";
import { API_URLS, baseApi } from "../utils/axios";

export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);

  const handleGetMovies = async () => {
    try {
      const {
        data: { data },
      } = await baseApi.get(API_URLS.GET_MOVIES);

      setMovies(data);
    } catch (error) {}
  };

  React.useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <>
      <div className="text-3xl">The best movies review site!</div>
      <div className="mt-4">
        <Input
          className="w-80 border-r-0"
          type="email"
          variant="bordered"
          placeholder="Search for your favourite movie"
        />
      </div>
      <div
        className="mt-10 mb-10"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2rem",
        }}
      >
        {movies?.map((e) => (
          <MovieBox />
        ))}
      </div>
    </>
  );
}
