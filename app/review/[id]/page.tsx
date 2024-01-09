"use client";

import { ReviewCard } from "../../../components/review-card";
import { API_URLS, baseApi } from "../../../utils/axios";
import React from "react";

export default function ReviewPage({ params }: { params: { id: string } }) {
  const [movie, setMovie] = React.useState<any>({});

  const fetchReviews = async () => {
    try {
      const {
        data: { data },
      } = await baseApi.get(`${API_URLS.GET_REVIEWS}/${params.id}`);
      setMovie(data);
    } catch (error) {}
  };

  React.useEffect(() => {
    fetchReviews();
  }, [params.id]);

  return (
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
        {movie?.reviews?.map((e: any) => (
          <ReviewCard />
        ))}
      </div>
    </div>
  );
}
