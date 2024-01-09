"use client";

import { Input } from "@nextui-org/react";
import { MovieBox } from "../components/MovieBox";
import React from "react";
import { API_URLS, baseApi } from "../utils/axios";
import { Navbar } from "../components/navbar";
import Link from "next/link";
import { Loader } from "../components/spinner";

export default function Home() {
  const [movies, setMovies] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");

  const handleGetMovies = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await baseApi.get(`${API_URLS.GET_MOVIES}/?take=50`);

      setMovies(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = React.useCallback(async (q: string) => {
    try {
      const {
        data: { data },
      } = await baseApi.get(`${API_URLS.SEARCH_MOVIES}?search=${q}`);
      setMovies(data);
    } catch (error) {}
  }, []);

  React.useEffect(() => {
    const debounceTimer = setTimeout(() => {
      searchMovies(search);
    }, 500);

    // Cleanup function to clear the timeout when the component unmounts or when query changes
    return () => clearTimeout(debounceTimer);
  }, [search, searchMovies]);

  React.useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <>
      <Navbar getMovies={handleGetMovies} />
      {loading && <Loader />}
      {!loading && (
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
          <div className="text-3xl">The best movies review site!</div>
          <div className="mt-4">
            <Input
              className="w-80 border-r-0"
              type="email"
              variant="bordered"
              placeholder="Search for your favourite movie"
              onChange={(e) => setSearch(e.target.value)}
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
              <div key={e.id} className="cursor-pointer">
                <Link href={`/review/${e.id}`}>
                  <MovieBox
                    name={e.name}
                    releasedDate={e.releaseDate}
                    averageRating={e.averageRating ?? 0}
                  />
                </Link>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
}
