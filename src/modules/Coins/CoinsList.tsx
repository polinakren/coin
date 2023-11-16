import { ApiCoinsGet200ResponseDataInner } from 'coin-api-client';
import styled from '@emotion/styled';

import { CoinCard } from '~modules/Coins/CoinCard';

type CoinsListProps = {
  coins?: ApiCoinsGet200ResponseDataInner[];
};

export const CoinsList = ({ coins }: CoinsListProps) => {
  return <Spacer>{coins?.map(coin => <CoinCard key={coin.id} coin={coin} />)}</Spacer>;
};

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
