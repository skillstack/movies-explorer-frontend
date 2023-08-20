import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
      <Routes>

        <Route
          path='/'
          element={<Main />}
        />

        <Route
          path='/movies'
          element={<Movies />}
        />

        <Route
          path='/saved-movies'
          element={<SavedMovies />}
        />

        <Route
          path='/signup'
          element={<Register />}
        />

        <Route
          path='/signin'
          element={<Login />}
        />

        <Route
          path='/profile'
          element={<Profile />}
        />

        <Route
          path='/404'
          element={<NotFound />}
        />

      </Routes>
  );
}

export default App;