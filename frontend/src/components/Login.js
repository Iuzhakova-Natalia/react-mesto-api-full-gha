import { useForm } from "./hooks/useForm";
import { Link } from "react-router-dom";

const Login = ({ loginUser }) => {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loginUser(values);
  };

  return (
    <div className="authorization">
      <h2 className="authorization__title">Вход</h2>
      <form onSubmit={handleSubmit} className="authorization__form">
        <input
          id="email"
          name="email"
          type="email"
          className="authorization__input"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          autoComplete="email"
        ></input>
        <input
          id="password"
          name="password"
          type="password"
          className="authorization__input"
          placeholder="Пароль"
          value={values.password}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button to="/sign-up" type="submit" className="authorization__button">
          Войти
        </button>
      </form>
      <div className="authorization__signup">
        <p>Ещё не зарегистрированы?</p>
        <Link to="/sign-up" className="authorization__link">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Login;
