import React from "react";
import { usePopupClose } from "./hooks/usePopupClose";


function PopupWithForm({
  name,
  isOpen,
  onClose,
  title,
  children,
  buttonText,
  onSubmit,
}) {
  usePopupClose(isOpen, onClose);
  return (
    <section
      className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button popup__close-button_type_edit-profile"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__header">{title}</h2>
        <form
          className="form form_type_edit-profile"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button className="form__button" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
