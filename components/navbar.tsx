"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { MovieModal } from "./movie-modal";
import React from "react";
import { ReviewModal } from "./review-modal";

export const Navbar = ({ getMovies }: any) => {
  const [showMovieModel, setShowMovieModal] = React.useState(false);
  const [showReviewModal, setShowReviewModal] = React.useState(false);

  return (
    <>
      <MovieModal
        isOpen={showMovieModel}
        setOpen={setShowMovieModal}
        getMovies={getMovies}
      />
      <ReviewModal
        isVisible={showReviewModal}
        setIsVisible={setShowReviewModal}
      />
      <NextUINavbar isBlurred maxWidth="xl" position="sticky">
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center gap-1"
              href="/"
            >
              <p className="font-bold text-inherit">MOVIECRITIC</p>
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
          <NavbarItem className="hidden md:flex gap-3">
            <Button
              onClick={() => setShowMovieModal(true)}
              color="primary"
              variant="bordered"
            >
              Add new movie
            </Button>
            <Button onClick={() => setShowReviewModal(true)} color="secondary">
              Add new review
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
