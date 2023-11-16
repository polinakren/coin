import {
  ApiCoinsGet200Response as CoinApiResponse,
  ApiCoinsGet200ResponseDataInner as CoinData,
} from 'coin-api-client';

export const getSlicedData = (data: CoinData[], page = 1, limit = 5, title?: string): CoinApiResponse => {
  const filteredData = title ? data.filter(item => item.title.toLowerCase().startsWith(title.toLowerCase())) : data;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const slicedData = filteredData.slice(startIndex, endIndex);

  return {
    data: slicedData,
    meta: {
      page,
      limit,
      total: filteredData.length,
      pageCount: Math.ceil(filteredData.length / limit),
    },
  };
};
