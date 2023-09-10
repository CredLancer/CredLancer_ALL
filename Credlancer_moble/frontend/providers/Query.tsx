import { QueryClient, QueryClientProvider as Provider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 2000,
    },
  },
});

export default function QueryClientProvider({ children }: any) {
  return <Provider client={queryClient}>{children}</Provider>;
}
