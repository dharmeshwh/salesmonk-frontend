"use client";

import { ReviewCard } from "../../../components/review-card";
import { API_URLS, baseApi } from "../../../utils/axios";
import React from "react";
import { Navbar } from "../../../components/navbar";
import { Loader } from "../../../components/spinner";
import { NoData } from "../../../components/no-data";

export default function ReviewPage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await baseApi.get(`${API_URLS.GET_REVIEWS}/${params.id}`);
      setMovie(data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchReviews();
  }, [params.id]);

  return (
    <>
      <Navbar fetchReviews={fetchReviews} />
      {loading && <Loader />}
      {!loading && (
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow ">
          <div className="mr-20">
            <div className="flex justify-between align-center">
              <h1 className="text-5xl font-semibold">{movie?.name}</h1>
              <h1 className="text-5xl font-medium text-purple-800">
                {movie?.averageRating ?? 0}/10
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              {!movie?.reviews?.length && <NoData text="No reviews found!" />}
              {movie?.reviews?.map((e: any) => (
                <ReviewCard {...e} />
              ))}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
