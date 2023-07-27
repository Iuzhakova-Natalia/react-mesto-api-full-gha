
export const configValidation = {
  inputSelector: ".form__input-text",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input-text_type_error-line",
  errorClass: "form__input-error_active",
};

// попапы
export const popupFormProfileSelector = ".popup_tupe_edit";
export const popupFormCardSelector = ".popup_type_new-place";
export const popupCardImageSelector = ".popup_type_image";
export const popupFormAvatarSelector = ".popup_type_avatar";
export const popupFormConfirmationSelector = '.popup_type_delete-card';

// профиль
export const userNameSelector = '.profile__name';
export const userAboutSelector = '.profile__about';
export const userAvatarSelector = '.profile__avatar';

// кнопки
export const buttonEdit = document.querySelector(".profile__button_type_edit");
export const buttonAdd = document.querySelector(".profile__add-button");
export const buttonAvatar = document.querySelector(".profile__ava-button");

// формы
export const formProfile = document.forms["form-edit-profile"];
export const formAvatar = document.forms["form-avatar"];
export const formCard = document.forms["form-add-card"];

// template и контейнер для карточек
export const cardTemplateSelector = '#card-template';
export const cardsContainerSelector = '.cards-container'; 