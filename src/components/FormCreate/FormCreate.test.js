import renderWithProviders from "../../utils/test-utils";
import FormCreate from "./FormCreate";
import { screen } from "@testing-library/react";

describe("Given a component FormCreate", () => {
  describe("When it's rendered'", () => {
    test("Then it should render a form with a button create", () => {
      renderWithProviders(<FormCreate />);

      const elementForm = screen.getByRole("button", { name: /create/i });

      expect(elementForm).toBeInTheDocument();
    });
  });
});
