import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/header__logo.svg";

function Header({ userData, logOut }) {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <Routes>
        <Route
          path="/sign-in"
          element={
            <Link className="header__link" to="/sign-up">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Link className="header__link" to="/sign-in">
              Войти
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__user">
              <p className="header__email">{userData.email}</p>
              <button className="header__button" onClick={logOut}>
                Выйти
              </button>
            </div>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
