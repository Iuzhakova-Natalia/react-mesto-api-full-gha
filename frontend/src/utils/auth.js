export const BASE_URL = "https://mesto-backend.nomoreparties.sbs";
//export const BASE_URL = "http://localhost:3001";

const makeRequest = (url, method, body, token) => {
  const options = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  if (token) {
    options.headers.authorization = `Bearer ${token}`;
  }
  return fetch(`${BASE_URL}${url}`, options).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw new Error(`Ошибка код ${res.status}`);
  });
};

export const register = ({ email, password }) => {
  return makeRequest("/signup", "POST", { email, password }, null);
};

export const authorize = ({ email, password }) => {
  return makeRequest("/signin", "POST", { email, password }, null);
};

export const getContent = (token) => {
  return makeRequest("/users/me", "GET", null, token);
};
