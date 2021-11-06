import renderWithProviders from "../../utils/test-utils";
import FormUpdate from "./FormUpdate";

describe("Given a component Robot", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a Robot", () => {
      renderWithProviders(<FormUpdate />);
    });
  });
});
