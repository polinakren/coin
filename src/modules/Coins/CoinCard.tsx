import { ApiCoinsGet200ResponseDataInner } from 'coin-api-client';

type CoinCardProps = {
  coin?: ApiCoinsGet200ResponseDataInner;
};

export const CoinCard = ({ coin }: CoinCardProps) => {
  return <li>{coin?.title}</li>;
};
