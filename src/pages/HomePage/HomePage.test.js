import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { server } from "../../mocks/server";
import HomePage from "./HomePage";
import configureStore from "../redux/store";
const store = configureStore();

describe("Given a HomePage component,", () => {
  describe("When it's rendered", () => {
    beforeAll(() => {
      server.listen();
    });

    beforeEach(() => {
      server.resetHandlers();
    });
    afterAll(() => {
      server.close();
    });

    test("Then it shouls render the list of robots", async () => {
      const robot = [
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
      ];
      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const robotName = await screen.findByRole("heading", {
        name: robot[0].name,
      });

      await waitFor(() => {
        expect(robotName).toBeInTheDocument();
      });
    });
  });
});
