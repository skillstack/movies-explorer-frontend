import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import {
  getSavedMovies,
  login,
  loginWithToken,
  logout,
  register,
  removeMovie,
  saveMovies,
  updateProfile,
} from "../../utils/MainApi";
import EditProfile from "../EditProfile/EditProfile";
import { getMovies } from "../../utils/MoviesApi";
import ProtectedRouteElement from "../ProtectedRoute/ProtectedRoute";
import Preloader from "../Preloader/Preloader";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [usePreloader, setUsePreloader] = useState(true);
  const navigate = useNavigate();
  const [useMessage, setUseMessage] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [beatfilmMovies, setBeatfilmMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/profile") {
      setUseMessage("");
    } else {
      setTimeout(() => {
        setUseMessage("");
      }, 10000);
    }
  }, [navigate]);

  useEffect(() => {
    getUser();
  }, []);

  function handleRegister({ name, email, password }) {
    setUsePreloader(true);
    register({ name, email, password })
      .then((res) => {
        if (res !== false) {
          navigate("/signin", { replace: true });
          handleLogin({ email, password });
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function handleLogin({ email, password }) {
    setUsePreloader(true);
    login({ email, password })
      .then((res) => {
        if (res !== false) {
          setLoggedIn(true);
          navigate("/movies", { replace: true });
          getUser();
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function getUser() {
    setUsePreloader(true);
    loginWithToken()
      .then((user) => {
        if (user && typeof user === "object") {
          setLoggedIn(true);
          setCurrentUser(user);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setUsePreloader(false);
        setIsTokenChecked(true);
      });
  }

  function handleLogout() {
    setUsePreloader(true);
    logout()
      .then((res) => {
        if (res !== false) {
          setLoggedIn(false);
          navigate("/", { replace: true });
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  function handleProfileUpdate({ name, email }) {
    setUsePreloader(true);
    updateProfile({ name, email })
      .then((res) => {
        if (res !== false) {
          navigate("/profile", { replace: true });
          setUseMessage("Профиль успешно обновлен");
          getUser();
        }
      })
      .catch((error) => {
        setUseMessage(error.message);
        console.log(error.status);
      })
      .finally(() => {
        setUsePreloader(false);
      });
  }

  useEffect(() => {
    if (loggedIn) {
      setUsePreloader(true);
      Promise.all([getMovies(), getSavedMovies()])
        .then((res) => {
          const movies = res[0];
          const savedMovies = res[1];

          const updatedMovies = movies.map((movie) => {
            const savedMovie = savedMovies.find(
              (item) => item.movieId === movie.id,
            );
            if (savedMovie) {
              return { ...movie, class: "like", key: movie.id };
            }
            return { ...movie, class: "default", key: movie.id };
          });

          const updatedSavedMovies = savedMovies.map((movie) => {
            return { ...movie, class: "remove", key: movie._id };
          });

          setBeatfilmMovies(updatedMovies);
          setSavedMovies(updatedSavedMovies);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setUsePreloader(false);
  }, [loggedIn]);

  function handleLikeMovie(movie) {
    setUsePreloader(true);
    saveMovies(movie)
      .then((res) => {
        setBeatfilmMovies((state) =>
          state.map((el) =>
            el.id === res.movieId ? { ...el, class: "like" } : el,
          ),
        );
        res.class = "remove";
        setSavedMovies((prevMovies) => [...prevMovies, res]);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setUsePreloader(false));
  }

  function handleRemoveMovie(movieID) {
    setUsePreloader(true);
    const removedMovie = savedMovies.find((item) => {
      return item.movieId === movieID ? item : "";
    });
    removeMovie(removedMovie._id)
      .then(() => {
        setSavedMovies((state) => state.filter((el) => el.movieId !== movieID));

        setBeatfilmMovies((state) =>
          state.map((el) =>
            el.id === movieID ? { ...el, class: "default" } : el,
          ),
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setUsePreloader(false));
  }

  return (
    <>
      <Preloader openPreloader={usePreloader} />
      {isTokenChecked ? (
        <CurrentUserContext.Provider value={currentUser}>
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />

            <Route
              path="/movies"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  beatfilmMovies={beatfilmMovies}
                  handleLikeMovie={handleLikeMovie}
                  handleRemoveMovie={handleRemoveMovie}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRouteElement
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  handleRemoveMovie={handleRemoveMovie}
                  savedMovies={savedMovies}
                />
              }
            />

            {loggedIn ? (
              <Route path="*" element={<NotFound />} />
            ) : (
              <Route
                path="/signup"
                element={
                  <Register
                    handleRegister={handleRegister}
                    message={useMessage}
                  />
                }
              />
            )}

            {loggedIn ? (
              <Route path="*" element={<NotFound />} />
            ) : (
              <Route
                path="/signin"
                element={
                  <Login handleLogin={handleLogin} message={useMessage} />
                }
              />
            )}

            <Route
              path="/profile"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  handleLogout={handleLogout}
                  message={useMessage}
                />
              }
            />

            <Route
              path="/edit"
              element={
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={EditProfile}
                  handleLogout={handleLogout}
                  handleProfileSubmit={handleProfileUpdate}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </CurrentUserContext.Provider>
      ) : (
        <Preloader openPreloader={usePreloader} />
      )}
    </>
  );
}

export default App;
