import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { ReactElement, PropsWithChildren } from "react";

export const renderWithProviders = (component: ReactElement) => {
  const queryClient = new QueryClient();
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  };

  return render(component,{
    wrapper: Wrapper
  })
}