import Header from "./Header";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

describe("Given a component Header", () => {
  describe("When it's rendered'", () => {
    test("Then it renders a Header", () => {
      render(
        <Router>
          <Header />
        </Router>
      );
    });
  });
});
