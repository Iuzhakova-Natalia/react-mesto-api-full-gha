import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { useForm } from "./hooks/useForm";

const AddPlacePopup = (props) => {
  const { values, handleChange, setValues } = useForm({});

  function handleSumbit(evt) {
    evt.preventDefault();
    props.onAddPlace(values);
  }

  useEffect(() => {
    if (!props.isOpen) setValues({});
  }, [props.isOpen, setValues]);

  return (
    <PopupWithForm
      name="new-place"
      title="Новое место"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        className="form__input-text form__input-text_type_place"
        type="text"
        name="name"
        id="place-input"
        placeholder="Название"
        minLength={2}
        maxLength={30}
        onChange={handleChange}
        value={values.name || ""}
        required
      />

      <span className="form__input-error place-input-error" />

      <input
        className="form__input-text form__input-text_type_link"
        type="url"
        id="link-input"
        name="link"
        placeholder="Ссылка на картинку"
        onChange={handleChange}
        value={values.link || ""}
        required
      />

      <span className="form__input-error link-input-error" />
    </PopupWithForm>
  );
};

export default AddPlacePopup;
