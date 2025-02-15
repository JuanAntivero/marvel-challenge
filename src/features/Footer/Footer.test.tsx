import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render Marvel attribution", () => {
    render(<Footer />);
    expect(screen.getByText("Data provided by Marvel. © 2014 Marvel")).toBeInTheDocument();
  })
})