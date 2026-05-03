const API_URL = "https://inti-backend-xnq4.onrender.com/api";

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