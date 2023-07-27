import { usePopupClose } from "./hooks/usePopupClose";

function ImagePopup({ card, onClose }) {
  usePopupClose(card, onClose);
  return (
    <section
      className={`popup popup_type_image ${card.isOpen && "popup_opened"}`}
    >
      <figure className="popup__window">
        <button
          className="popup__close-button popup__close-button_type_image"
          type="button"
          onClick={onClose}
        />
        <img className="popup__image" src={card?.link} alt={card?.name} />
        <figcaption className="popup__place">
          {card ? card.name : ""}
        </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup;
