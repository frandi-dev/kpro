const request = async (url, method = "GET", body) => {
  const headers = {
    "Content-Type": "application/json",
  };

  const token = localStorage.getItem("token");
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const options = { method: method.toLocaleUpperCase(), headers };

  if (body) {
    options.body = JSON.stringify(body);
  }

  return await fetch(url, options);
};

const api = {
  get: (url, body) => request(url, "get", body),
  post: (url, body) => request(url, "post", body),
  put: (url, body) => request(url, "put", body),
  patch: (url, body) => request(url, "patch", body),
  delete: (url, body) => request(url, "delete", body),
};

export default api;
