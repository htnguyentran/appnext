import fetch from "isomorphic-unfetch";

let baseURl = process.env.HOST;
let port = process.env.PORT;
let headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const Search = async (params: Object, req: Object, signal = null) => {
  if (req) {
    headers["cookie"] = req.headers.cookie;
    baseURl = "http://localhost:" + port;
  }
  const res = await fetch(`/api/search`, {
    method: "GET",
    credentials: "include",
    headers,
    signal,
  });
  return await res.json();
};
export { Search };
