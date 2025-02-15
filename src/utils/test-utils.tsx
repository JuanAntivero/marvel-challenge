import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, PropsWithChildren } from "react";
import { AppStore, RootState, setupStore } from "../store/store";
import { Provider as ReduxProvider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>
  store?: AppStore
}

export const renderWithProviders = (
  component: ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}) => {
  const queryClient = new QueryClient();
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReduxProvider>
    )
  };

  return render(component,{
    wrapper: Wrapper,
    ...renderOptions
  })
}