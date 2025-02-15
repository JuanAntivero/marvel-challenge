import { render, screen, waitFor } from "@testing-library/react";
import Header from "./Header";
import userEvent from "@testing-library/user-event";

const onClickLogo = vi.fn();
const onClickFavorites = vi.fn();

describe("Header", () => {
  it("should render proper icon and buttons", () => {
    render(
      <Header 
        onClickFavorites={onClickFavorites}
        onClickLogo={onClickLogo}
        favoriteNumber={1}
      />
    );

    expect(screen.getByTestId("marvel-logo")).toBeInTheDocument();
    expect(screen.getByTestId("favorite-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("fav-transparent-icon")).not.toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should render proper icon when no favorites", () => {
    render(
      <Header 
        onClickFavorites={onClickFavorites}
        onClickLogo={onClickLogo}
        favoriteNumber={0}
      />
    );

    expect(screen.queryByTestId("favorite-icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("fav-transparent-icon")).toBeInTheDocument();
  });

  it("should call proper callbacks when clicking icons", async () => {
    render(
      <Header 
        onClickFavorites={onClickFavorites}
        onClickLogo={onClickLogo}
        favoriteNumber={1}
      />
    );

    userEvent.click(screen.getByTestId("marvel-logo"));
    userEvent.click(screen.getByTestId("favorite-icon"));

    await waitFor(() => {
      expect(onClickLogo).toHaveBeenCalledOnce()
      expect(onClickFavorites).toHaveBeenCalledOnce()
    });
  });
})