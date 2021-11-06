import renderWithProviders from "../../utils/test-utils";
import FormUpdate from "./FormUpdate";
import { screen } from "@testing-library/react";

describe("Given a component Robot", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a Robot", () => {
      renderWithProviders(<FormUpdate />);

      const elementForm = screen.getByRole("button", { name: /update/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
