import { screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { renderWithProviders } from "../../utils/test-utils";
import Home from "./Home";
import { handlers } from "../../mocks/handlers";

const navigate = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => navigate,
}));

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
    expect(screen.queryByText(/3 results/i)).not.toBeInTheDocument();
    expect(screen.getByTestId("loading-bar")).toBeInTheDocument();
    
    expect(screen.queryByAltText("3-D Man")).not.toBeInTheDocument();
    expect(screen.queryByText("3-D Man")).not.toBeInTheDocument();

    expect(screen.queryByAltText("Aaron Stack")).not.toBeInTheDocument();
    expect(screen.queryByText("Aaron Stack")).not.toBeInTheDocument();

    expect(screen.queryByAltText("A.I.M.")).not.toBeInTheDocument();
    expect(screen.queryByText("A.I.M.")).not.toBeInTheDocument();

    await waitFor(() => {
      // Final state
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
      expect(screen.getByText(/3 results/i)).toBeInTheDocument();
      
      // Hero Cards
      expect(screen.getByAltText("3-D Man")).toBeInTheDocument();
      expect(screen.getByText("3-D Man")).toBeInTheDocument();

      expect(screen.getByAltText("Aaron Stack")).toBeInTheDocument();
      expect(screen.getByText("Aaron Stack")).toBeInTheDocument();

      expect(screen.getByAltText("A.I.M.")).toBeInTheDocument();
      expect(screen.getByText("A.I.M.")).toBeInTheDocument();
    });
  });

  it("should properly filter values", async () => {
    renderWithProviders(<Home />);
    
    await waitFor(() => {
      // waits until data loaded
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
    });

    // Setup
    const searchInput = screen.getByPlaceholderText(/search a character.../i);
    userEvent.type(searchInput, "3-d");

    await waitFor(() => {
      // Final State
      expect(screen.getByText(/1 result/i)).toBeInTheDocument();
      expect(screen.getByText("3-D Man")).toBeInTheDocument();
      expect(screen.queryByText("Aaron Stack")).not.toBeInTheDocument();
      expect(screen.queryByText("A.I.M.")).not.toBeInTheDocument();
    });
  });

  it("should launch a proper navigation when clicking a card", async () => {
    renderWithProviders(<Home />);
    
    await waitFor(() => {
      // waits until data loaded
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
    });

    // Setup
    const firstCard = screen.getByText("3-D Man");
    userEvent.click(firstCard);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/hero/1011334");
    });
  });
})