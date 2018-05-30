import "isomorphic-fetch";
import { API_URL_ROOT } from "../actions/action.constance";

export async function post(url, payload) {
  // TODO change to be Authorization Bearer (needs a backend change as well)
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      snaphuntjwttoken: localStorage.getItem("snaphuntJwtToken"),
      "cache-control": "no-cache",
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      "content-type": "application/json"
    }
  });
}

export async function get(url) {
  console.log("=======",`${API_URL_ROOT}/${url}`);
  return await fetch(`${API_URL_ROOT}/${url}`, {
    json: true,
    headers: {
      snaphuntjwttoken: localStorage.getItem("snaphuntJwtToken"),
      "cache-control": "no-cache",
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      "content-type": "application/json"
    }
  });
}

export async function patch(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      snaphuntjwttoken: localStorage.getItem("snaphuntJwtToken"),
      "cache-control": "no-cache",
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      "content-type": "application/json"
    }
  });
}

export async function put(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    json: true,
    headers: {
      snaphuntjwttoken: localStorage.getItem("snaphuntJwtToken"),
      "cache-control": "no-cache",
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      "content-type": "application/json"
    }
  });
}
export async function putImage(url, payload) {
  return await fetch(`${API_URL_ROOT}/${url}`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      snaphuntjwttoken: localStorage.getItem("snaphuntJwtToken"),
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Authorization")}`,
      "cache-control": "no-cache",
      "Content-Length": JSON.stringify(payload).length,
      keepAlive: true
    }
  });
}
