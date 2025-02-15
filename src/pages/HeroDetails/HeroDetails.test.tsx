import { screen, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { renderWithProviders } from "../../utils/test-utils";
import HeroDetails from "./HeroDetails";
import { handlers } from "../../mocks/handlers";

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

  it("should render", async () => {
    renderWithProviders(<HeroDetails />);

    //Initial state
    expect(screen.getByTestId("loading-bar")).toBeInTheDocument();

    await waitFor(() => {
      // Final state
      // Hero Description
      expect(screen.queryByTestId("loading-bar")).not.toBeInTheDocument();
      expect(screen.getByRole("heading", { name: "A.I.M.", level: 1})).toBeInTheDocument();
      expect(screen.getByText("AIM is a terrorist organization bent on destroying the world.")).toBeInTheDocument();
      expect(screen.getByAltText("A.I.M.")).toBeInTheDocument();

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
  })
});