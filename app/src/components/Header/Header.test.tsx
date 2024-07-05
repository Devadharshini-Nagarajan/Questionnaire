import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

describe("Home Component", () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  it("renders header with correct text", () => {
    const headerText = screen.getByText(/BorderPass/i);
    expect(headerText).toBeInTheDocument();
  });

  it("renders header with correct link", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
