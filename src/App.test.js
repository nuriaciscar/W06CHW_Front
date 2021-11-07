import renderWithProviders from "./utils/test-utils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered and it contains a robot in the database'", () => {
    test("Then it should render a robot card", async () => {
      renderWithProviders(<App />);
    });
  });
});
