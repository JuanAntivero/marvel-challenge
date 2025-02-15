import { screen, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { renderWithProviders } from "../../utils/test-utils";
import HeroDetails from "./HeroDetails";
import { handlers } from "../../mocks/handlers";
import userEvent from "@testing-library/user-event";

vi.mock('react-router-dom', () => ({
  useParams: () => ({ heroId: 1009144}),
}));

const server = setupServer(...handlers);

describe("Hero Details Page", () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should render proper data", async () => {
    renderWithProviders(<HeroDetails />);

    //Initial state
    expect(screen.getByTestId("loading-bar")).toBeInTheDocument();

    await waitFor(() => {
      // Final state
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
      // Hero Description
      expect(screen.getByRole("heading", { name: "A.I.M.", level: 1})).toBeInTheDocument();
      expect(screen.getByText("AIM is a terrorist organization bent on destroying the world.")).toBeInTheDocument();
      expect(screen.getByAltText("A.I.M.")).toBeInTheDocument();
      expect(screen.getByTestId("fav-transparent-icon")).toBeInTheDocument();

      // Comics list
      expect(screen.getByRole("heading", { name: /comics/i, level: 2})).toBeInTheDocument();

      expect(screen.getByAltText("Who Is...? M.O.D.O.K. Infinity Comic (2023) #1")).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "Who Is...? M.O.D.O.K. Infinity Comic (2023) #1", level: 3})).toBeInTheDocument();
      expect(screen.getByText("2023")).toBeInTheDocument();

      expect(screen.getByAltText("Avengers Unlimited Infinity Comic (2022) #17")).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "Avengers Unlimited Infinity Comic (2022) #17", level: 3})).toBeInTheDocument();
      expect(screen.getByText("2022")).toBeInTheDocument();

      expect(screen.getByAltText("X-Men Unlimited Infinity Comic (2021) #1")).toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "X-Men Unlimited Infinity Comic (2021) #1", level: 3})).toBeInTheDocument();
      expect(screen.getByText("2021")).toBeInTheDocument();
    });
  });

  it("should set favorite hero when clicking on favorite icon", async () => {
    renderWithProviders(<HeroDetails />);

    await waitFor(() => {
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
    });

    // Initial State
    expect(screen.getByTestId("fav-transparent-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("favorite-icon")).not.toBeInTheDocument();

    // Setup
    userEvent.click(screen.getByTestId("fav-transparent-icon"));

    await waitFor(() => {
      // Final State
      expect(screen.queryByTestId("fav-transparent-icon")).not.toBeInTheDocument();
      expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
    });
  })
});