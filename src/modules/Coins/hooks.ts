import {
  ApiCoinsGet200Response as ApiCoinsResponse,
  ApiCoinsGet200ResponseDataInner as ApiCoinsResponseData,
  ApiCoinsGetRequest,
  ApiCoinsIdPriceGetRequest as ApiPriceRequest,
  ApiCoinsIdTransferPostOperationRequest as ApiTransferRequest,
} from 'coin-api-client';
import { useMutation, useQuery } from 'react-query';

import { balanceApi, coinsApi } from '~services/api';
import { Env } from '~utils/Env';
import { getSlicedData } from '~utils/getSlicedData';

const GET_COINS = 'GET_COINS';
const GET_BALANCE = 'GET_BALANCE';
const GET_COIN_PRICE_BY_ID = 'GET_COIN_PRICE_BY_ID';
const DEFAULT_BALANCE = 50;

export const useCoinApi = (req: ApiCoinsGetRequest) => {
  const queryKey = [GET_COINS, req?.page, req?.limit, req?.title];

  const queryFn = async () => {
    if (Env.isDev) {
      // Use mock data during development
      const module = await import('../../mocks/coins.json');
      return getSlicedData(module.default as ApiCoinsResponseData[], req?.page, req?.limit, req?.title);
    } else {
      // Use API call in other environments
      const { data, meta } = await coinsApi.apiCoinsGet(req);
      return { data, meta } as ApiCoinsResponse;
    }
  };

  const { data, isLoading } = useQuery(queryKey, queryFn);

  return { coins: data?.data, total: data?.meta.total, isLoading };
};

export const useBalanceApi = () => {
  const queryKey = [GET_BALANCE];

  const queryFn = async () => {
    if (Env.isDev) {
      // Use mock data during development
      return { balance: DEFAULT_BALANCE };
    } else {
      // Use API call in other environments
      const { data } = await balanceApi.apiBalanceGet();
      return { data };
    }
  };

  const { data, isLoading } = useQuery(queryKey, queryFn);

  return { balance: data?.balance, isLoading };
};

export const useCoinPriceByIdApi = (id?: ApiPriceRequest['id']) => {
  const queryKey = [GET_COIN_PRICE_BY_ID, id];

  const queryFn = async () => {
    if (Env.isDev) {
      // Use mock data during development
      return { price: 5 };
    } else {
      // Use API call in other environments
      const { data } = await coinsApi.apiCoinsIdPriceGet({ id: id! });
      return { data };
    }
  };

  const { data, isLoading } = useQuery(queryKey, queryFn, {
    enabled: id !== undefined,
  });

  return { price: data?.price, isLoading };
};

const postTransferCoins = (req: ApiTransferRequest) => coinsApi.apiCoinsIdTransferPost(req);

export const useCoinActions = () => {
  const { mutateAsync: transferCoins } = useMutation(postTransferCoins);
  return { transferCoins };
};
