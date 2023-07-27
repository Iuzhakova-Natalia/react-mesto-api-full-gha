function ImagePopup(props) {
  return (
    <section
      className={`popup_type_image popup ${
        props.card.name ? "popup_opened" : ""
      }`}
    >
      <figure className="popup__window">
        <button
          className="popup__close-button popup__close-button_type_image"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__image"
          src={props.card?.link}
          alt={props.card?.name}
        />
        <figcaption className="popup__place">
          {props.card ? props.card.name : ""}
        </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup;
