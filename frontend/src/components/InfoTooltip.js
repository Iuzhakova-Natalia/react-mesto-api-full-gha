import React from "react";
import infoToltipSuccess from "../images/Union.png";
import infoToltipFailure from "../images/UnionFail.png";
import { usePopupClose } from "./hooks/usePopupClose";

const InfoTooltip = ({ onClose, isOpen, isRegister }) => {
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup  ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup_type_tooltip">
        <button
          className="popup__close-button popup__close-button_type_tooltip "
          onClick={onClose}
          type="button"
          aria-label="Закрыть"
        ></button>
        <img
          className="popup__image-status"
          src={isRegister.status ? infoToltipSuccess : infoToltipFailure}
          alt="Статус"
        ></img>
        <p className="popup__text-status">{isRegister.message}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;
