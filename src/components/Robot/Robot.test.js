import renderWithProviders from "../../utils/test-utils";
import Robot from "./Robot";

describe("Given a component Robot", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a form", () => {
      renderWithProviders(<Robot />);
    });
  });
});
