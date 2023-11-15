import { ApiCoinsGet200ResponseDataInner } from 'coin-api-client';
import { CoinCard } from '~modules/Coins/CoinCard';

type CoinsListProps = {
  coins?: ApiCoinsGet200ResponseDataInner[];
};

export const CoinsList = ({ coins }: CoinsListProps) => {
  return <>{coins?.map(coin => <CoinCard key={coin.id} coin={coin} />)}</>;
};
