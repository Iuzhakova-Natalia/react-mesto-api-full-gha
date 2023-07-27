import { useContext, useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditFrofilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function hadleChangeName(evt) {
    setName(evt.target.value);
  }

  function hadleChangeAbout(evt) {
    setDescription(evt.target.value);
  }

  return (
    <PopupWithForm
      name="edit"
      buttonText="Сохранить"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        className="form__input-text form__input-text_type_name form__input-error-line"
        type="text"
        id="name-input"
        name="name"
        placeholder="Имя"
        minLength={2}
        maxLength={40}
        value={name || ""}
        onChange={hadleChangeName}
        required
      />

      <span className="form__input-error name-input-error"></span>

      <input
        className="form__input-text form__input-text_type_about"
        type="text"
        id="about-input"
        name="about"
        placeholder="Вид деятельности"
        minLength={2}
        maxLength={200}
        value={description || ""}
        onChange={hadleChangeAbout}
        required
      />

      <span className="form__input-error about-input-error" />
    </PopupWithForm>
  );
}

export default EditFrofilePopup;
