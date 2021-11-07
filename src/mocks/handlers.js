import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API, async (req, res, ctx) => {
    const response = res(
      ctx.json([
        {
          _id: "1",
          name: "Wall-e",
          url: "http://macmagazine.com.br/blog/wp-content/uploads/2008/06/28-walle021.jpg",
          features: {
            speed: 2,
            stamina: 10,
            creationDate: new Date(),
          },
        },
      ])
    );

    return response;
  }),
];
