class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _updateHeaders() {
    this._headers = {
      ...this._headers,
      Authorization: `Bearer ${localStorage.getItem("jwt") || ""}`,
    };
  }
  
  // проверить ответ сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  // получить данные о пользователе
  getUserInfo() {
    this._updateHeaders();
    return fetch(`${this._baseUrl}/users/me`, {
     // method: 'GET',
      headers: this._headers
    })
      .then(this._checkResponse)
  }

  // обновить данные о пользователе
  patchUserInfo(user) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: user.name,
        about: user.about
      })
    })
      .then(this._checkResponse)
  }
  
  // обновить аватар пользователя
  patchAvatar(user) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: user.avatar
      })
    })
      .then(this._checkResponse)
  }

  // получить карточки
  getCards() {
    this._updateHeaders();
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  // добавить карточку
  postCard({name, link}) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkResponse)
  }

  // удалить карточку
  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
  }

  // поставить удалить лайк
  changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

}

const api = new Api({baseUrl: "https://mesto-backend.nomoreparties.sbs", //"http://localhost:3001",
headers: {
  Authorization: `Bearer ${localStorage.getItem("jwt") || ""}`,
  // authorization: 'f399a358-b7ca-4b29-94a1-1f340ae5085a',
  'Content-Type': 'application/json'
}
});

export default api;