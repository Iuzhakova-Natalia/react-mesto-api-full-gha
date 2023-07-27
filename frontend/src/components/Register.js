import { Link } from "react-router-dom";
import { useForm } from "./hooks/useForm";

const Register = ({ registerUser }) => {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    registerUser(values);
  };

  return (
    <div className="authorization">
      <h2 className="authorization__title">Регистрация</h2>
      <form onSubmit={handleSubmit} className="authorization__form">
        <input
          id="email"
          name="email"
          type="email"
          className="authorization__input"
          placeholder="Email"
          value={values.email || ""}
          onChange={handleChange}
        ></input>
        <input
          id="password"
          name="password"
          type="password"
          className="authorization__input"
          placeholder="Пароль"
          value={values.password || ""}
          onChange={handleChange}
        ></input>
        <button to="/sign-in" type="submit" className="authorization__button">
          Зарегистрироваться
        </button>
      </form>
      <div className="authorization__signup">
        <p>Уже зарегистрированы?</p>
        <Link to="/login" className="authorization__link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
