import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
  const refInput = useRef(null);

  function handleSumbit(event) {
    event.preventDefault();
    props.onUpdateAvatar({
      avatar: refInput.current.value,
    });
  }

  useEffect(() => {
    refInput.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      buttonText="Сохранить"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        className="form__input-text form__input-text_type_avatar"
        type="url"
        id="avatar-input"
        name="avatar"
        ref={refInput}
        placeholder="Ссылка на картинку"
        required
      />

      <span className="form__input-error avatar-input-error" />
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
