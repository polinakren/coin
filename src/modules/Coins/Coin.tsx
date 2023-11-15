import { Skeleton } from 'antd';

import { useCoinApi } from '~modules/Coins/hooks';

export const Coin = () => {
  const { coins, isLoading } = useCoinApi({ page: 1, limit: 5 });

  return <>{isLoading ? <Skeleton /> : <p>{coins?.length}</p>}</>;
};
