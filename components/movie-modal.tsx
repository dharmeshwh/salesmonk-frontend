"use client";

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { API_URLS, baseApi } from "../utils/axios";

export const MovieModal = ({ isOpen, setOpen, getMovies }: any) => {
  const [movie, setMovie] = React.useState({
    name: "",
    releaseDate: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleAddMovie = async () => {
    try {
      await baseApi.post(API_URLS.CREATE_MOVIES, movie);
    } catch (error) {
    } finally {
      getMovies();
      setOpen(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Add Movie</ModalHeader>
          <ModalBody className="flex flex-col gap-8">
            <Input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                onChange={handleChange}
                name="releaseDate"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
            <Button
              onClick={handleAddMovie}
              className="mb-10"
              color="secondary"
            >
              Create movie
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
