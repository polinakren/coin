import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider, QueryClientConfig } from 'react-query';
import { notification } from 'antd';

interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const onError = (e: any) => {
    const message = e?.message === 'Unexpected end of JSON input' ? 'Failed to execute the request' : e?.message;

    notification.error({ message: message ?? e?.error, placement: 'topRight', duration: 0 });
  };

  const config: QueryClientConfig = {
    defaultOptions: {
      queries: {
        onError,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError,
      },
    },
  };

  const queryClient = new QueryClient(config);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
