// loader.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./loader";

describe("<Loader />", () => {
  test("renders the loader with default size", () => {
    render(<Loader />);
    const loaderElement = screen.getByRole("figure");
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass("loader");
    expect(loaderElement).toHaveStyle({ width: "16px", height: "16px" });
  });

  test("renders the loader with custom size", () => {
    render(<Loader size={32} />);
    const loaderElement = screen.getByRole("figure");
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass("loader");
    expect(loaderElement).toHaveStyle({ width: "32px", height: "32px" });
  });

  test("applies additional className to the loader", () => {
    render(<Loader className="custom-loader" />);
    const loaderElement = screen.getByRole("figure");
    expect(loaderElement).toHaveClass("loader custom-loader");
  });
});
