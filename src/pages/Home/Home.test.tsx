import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { renderWithProviders } from "../../utils/test-utils";
import Home from "./Home";
import { handlers } from "../../mocks/handlers";

const server = setupServer(...handlers);

describe("Home", () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should render spinner and then load cards", async () => {
    renderWithProviders(<Home />);
    // Initial state
    expect(screen.getByPlaceholderText(/search a character.../i)).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
    expect(screen.queryByText(/3 results/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/3-d man/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/aaron stack/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/a.i.m/i)).not.toBeInTheDocument();

    await waitFor(() => {
      // Final state
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
      expect(screen.getByText(/3 results/i)).toBeInTheDocument();
      expect(screen.getByText(/3-d man/i)).toBeInTheDocument();
      expect(screen.getByText(/aaron stack/i)).toBeInTheDocument();
      expect(screen.getByText(/a.i.m/i)).toBeInTheDocument();
    });
  });

  it("should properly filter values", async () => {
    renderWithProviders(<Home />);
    
    await waitFor(() => {
      // waits until data loaded
      expect(screen.queryByTestId("loading-spinner")).not.toBeInTheDocument();
    });

    // Setup
    const searchInput = screen.getByPlaceholderText(/search a character.../i);
    userEvent.type(searchInput, "3-d");

    await waitFor(() => {
      // Final State
      expect(screen.getByText(/1 result/i)).toBeInTheDocument();
      expect(screen.getByText(/3-d man/i)).toBeInTheDocument();
      expect(screen.queryByText(/aaron stack/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/a.i.m/i)).not.toBeInTheDocument();
    });
  });
})