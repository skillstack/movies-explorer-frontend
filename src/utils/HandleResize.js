import { useEffect, useState } from "react";
import {
  ADDMOVIES1024,
  ADDMOVIES768,
  MAXADDMOVIES,
  MAXMOVIESONPAGE,
  MOVIESON1024,
  MOVIESON768,
} from "./Constants";

export function ResizeHandlerComponent() {
  const [moviesToShow, setMoviesToShow] = useState({
    moviesOnPage: MAXMOVIESONPAGE,
    addMoviesOnPage: MAXADDMOVIES,
  });

  useEffect(() => {
    function handleWindowResize() {
      const screenWidth = window.innerWidth;

      let moviesOnPage = MAXMOVIESONPAGE;
      let addMoviesOnPage = MAXADDMOVIES;

      if (screenWidth < 1024) {
        moviesOnPage = MOVIESON1024;
        addMoviesOnPage = ADDMOVIES1024;
      }

      if (screenWidth < 768) {
        moviesOnPage = MOVIESON768;
        addMoviesOnPage = ADDMOVIES768;
      }

      setMoviesToShow({ moviesOnPage, addMoviesOnPage });
    }

    handleWindowResize();

    let resizeTimeout;

    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleWindowResize, 1000);
    });

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return moviesToShow;
}
