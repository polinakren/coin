import {
  ApiCoinsGet200Response as CoinApiResponse,
  ApiCoinsGet200ResponseDataInner as CoinData,
  ApiCoinsGetRequest,
} from 'coin-api-client';
import { useQuery } from 'react-query';

import { balanceApi, coinsApi } from '~services/api';

const GET_COINS = 'GET_COINS';

const isDevelopment = process.env.NODE_ENV === 'development';

export const useCoinApi = (req: ApiCoinsGetRequest) => {
  const queryKey = [GET_COINS, req?.page, req?.limit, req?.title];

  const queryFn = async () => {
    if (isDevelopment) {
      // Use mock data during development
      const module = await import('../../mocks/coins.json');
      return getSlicedData(module.default as CoinData[], req?.page, req?.limit);
    } else {
      // Use API call in other environments
      const { data, meta } = await coinsApi.apiCoinsGet(req);
      return { data, meta } as CoinApiResponse;
    }
  };

  const { data, isLoading } = useQuery(queryKey, queryFn);

  return { coins: data?.data, total: data?.meta.total, isLoading };
};

const getSlicedData = (data: CoinData[], page = 4, limit = 5): CoinApiResponse => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedData = data.slice(startIndex, endIndex);

  return {
    data: slicedData,
    meta: {
      page,
      limit,
      total: data.length,
      pageCount: Math.ceil(data.length / limit),
    },
  };
};
