// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
import fetch from "isomorphic-unfetch";

let baseURl = process.env.CURRENT_DOMAIN;
let port = process.env.PORT;
let headers = {
  "Content-Type": "application/json",
  "X-Requested-With": "XMLHttpRequest",
};

const Search = async (params: Object, req: Object, signal = null) => {
  if (req) {
    headers["cookie"] = req.headers.cookie;
    baseURl = "http://localhost:" + process.env.PORT;
  }
  const res = await fetch(`${baseURl}/api/search`, {
    method: "GET",
    credentials: "include",
    headers,
    signal,
  });
  return await res.status(200).json();
};
export { Search };
