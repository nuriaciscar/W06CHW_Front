import FormCreatePage from "./FormCreatePage";
import renderWithProviders from "../../utils/test-utils";

describe("Given a HomePage component,", () => {
  describe("When it's rendered", () => {
    test("Then it should render the CreateForm", async () => {
      renderWithProviders(<FormCreatePage />);
    });
  });
});
