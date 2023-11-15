import { ApiCoinsGet200ResponseDataInner, ApiCoinsGetRequest } from 'coin-api-client';
import { useQuery } from 'react-query';

import { coinsApi } from '~services/api';

const GET_COIN = 'GET_COIN';
const GET_COINS = 'GET_COINS';

export const useCoinApi = (req: ApiCoinsGetRequest) => {
  const queryKey = [GET_COINS, req?.page, req?.limit, req?.title];

  const isDevelopment = process.env.NODE_ENV === 'development';

  const queryFn = () => {
    if (isDevelopment) {
      // Use mock data during development
      return Promise.resolve(
        import('../../mocks/coins.json').then(module => module.default as ApiCoinsGet200ResponseDataInner[])
      );
    } else {
      // Use API call in other environments
      return coinsApi.apiCoinsGet(req).then(response => response.data);
    }
  };

  const { data: coins, isLoading } = useQuery(queryKey, queryFn);

  return { coins: coins, isLoading };
};
