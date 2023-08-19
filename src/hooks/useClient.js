import { QueryClient } from 'react-query';

export function useClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return queryClient;
}
