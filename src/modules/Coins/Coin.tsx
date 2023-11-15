import { useState } from 'react';
import { Skeleton, Pagination } from 'antd';

import { useCoinApi } from '~modules/Coins/hooks';
import { CoinsList } from '~modules/Coins/CoinsList';

export const Coin = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { coins, isLoading } = useCoinApi({ page: currentPage, limit: itemsPerPage });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <CoinsList coins={coins} />
          <Pagination current={currentPage} pageSize={itemsPerPage} total={20} onChange={handlePageChange} />
        </>
      )}
    </>
  );
};
