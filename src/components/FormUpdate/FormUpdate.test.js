import renderWithProviders from "../../utils/test-utils";
import FormUpdate from "./FormUpdate";
import { screen } from "@testing-library/react";

describe("Given a component FormUpdate", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button update", () => {
      renderWithProviders(<FormUpdate />);

      const elementForm = screen.getByRole("button", { name: /update/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
