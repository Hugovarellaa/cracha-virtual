import { NextApiRequest, NextApiResponse } from "next";

export default (resquest: NextApiRequest, response: NextApiResponse) => {
  const user = [
    {
      id: 1,
      name: "Hugo",
    },
    {
      id: 2,
      name: "Carlos",
    },
    {
      id: 3,
      name: "Ana",
    },
  ];
  return response.json(user);
};
