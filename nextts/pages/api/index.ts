import fetch from "isomorphic-unfetch";

let baseURl = process.env.HOST;
let port = process.env.PORT;

let headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const Search = async (model: any, req = null, signal = null) => {
  if (req) {
    baseURl = "http://localhost:" + port;
  }
  const res = await fetch(`/api/search`, {
    method: "GET",
    credentials: "include",
    headers,
    signal,
  });
  let data = await res.json();
  return data;
};

export { Search };
