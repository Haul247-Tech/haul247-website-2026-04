import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders landing headline", () => {
    render(<Home />);
    expect(screen.getByText(/connecting businesses to structured/i)).toBeInTheDocument();
  });
});
