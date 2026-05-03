const API_URL = "http://127.0.0.1:8000/api";

/* FETCH CON TOKEN AUTOMÁTICO */
export const authFetch = (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  });
};

/* FETCH NORMAL (SIN LOGIN) */
export const publicFetch = (endpoint) => {
  return fetch(`${API_URL}${endpoint}`);
};