"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Select, SelectItem } from "@nextui-org/react";
import { API_URLS, baseApi } from "../utils/axios";

export const ReviewModal = ({
  isVisible,
  setIsVisible,
  getMovies,
  getReviews,
}: any) => {
  const [movies, setMovies] = React.useState([]);
  const [review, setReview] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const handleGetMovies = async () => {
    try {
      const {
        data: { data },
      } = await baseApi.get(API_URLS.GET_MOVIES);

      setMovies(data.map((e: any) => ({ label: e.name, value: e.id })));
    } catch (error) {}
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setReview({
      ...review,
      [name]: value,
    });
  };

  const handleAddReview = async () => {
    try {
      setLoading(true);
      await baseApi.post(API_URLS.CREATE_REVIEW, review);
    } catch (error) {
    } finally {
      getMovies && getMovies();
      getReviews && getReviews();
      setLoading(false);
      setIsVisible(false);
    }
  };

  React.useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <>
      <Modal isOpen={isVisible} onOpenChange={() => setIsVisible(false)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Add new review
          </ModalHeader>
          <ModalBody className="flex flex-col gap-8">
            <Select
              onChange={handleChange}
              isRequired
              name="movieId"
              placeholder="Select a movie"
            >
              {movies.map((movie: any) => (
                <SelectItem key={movie.value} value={movie.value}>
                  {movie.label}
                </SelectItem>
              ))}
            </Select>
            <Input
              type="text"
              placeholder="Your name"
              name="reviewerName"
              onChange={handleChange}
            />
            <Input
              type="number"
              min={0}
              max={10}
              placeholder="Rating out of 10"
              name="rating"
              onChange={handleChange}
            />
            <textarea
              className="p-4 bg-gray-100"
              placeholder="Review comments"
              name="reviewComments"
              onChange={handleChange}
            ></textarea>
            <Button
              isLoading={loading}
              onClick={handleAddReview}
              className="mb-10"
              color="secondary"
            >
              Add review
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
