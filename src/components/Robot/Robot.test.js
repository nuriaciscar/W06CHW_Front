import Robot from "./Robot";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import renderWithProviders from "../../utils/test-utils";

import { render } from "@testing-library/react";

describe("Given a component Robot", () => {
  let robot;
  beforeAll(() => {
    robot = {
      _id: "1",
      name: "Wall-e",
      url: "http://macmagazine.com.br/blog/wp-content/uploads/2008/06/28-walle021.jpg",
      features: {
        speed: 2,
        stamina: 10,
        creationDate: new Date(),
      },
    };

    describe("When it receives a Robot", () => {
      test("Then it should render its image, its name and its features", () => {
        render(
          <Router>
            <Robot robot={robot} />
          </Router>
        );
      });
    });
    describe("When it's rendered'", () => {
      test("Then it renders a Robot", () => {
        renderWithProviders(<Robot />);
      });
    });
  });
});
