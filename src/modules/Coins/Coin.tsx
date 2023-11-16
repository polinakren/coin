import React, { useState } from 'react';
import { Skeleton, Pagination } from 'antd';
import styled from '@emotion/styled';

import { useBalanceApi, useCoinApi } from '~modules/Coins/hooks';
import { CoinsList } from '~modules/Coins/CoinsList';
import { CoinFilterValues, Info } from '~modules/Coins/Info';

export const Coin = () => {
  const itemsPerPage = 5;
  const [filter, setFilter] = useState<CoinFilterValues>(defaultFilter);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    coins,
    total,
    isLoading: isLoadingCoins,
  } = useCoinApi({ page: currentPage, limit: itemsPerPage, title: filter.title });

  const { balance, isLoading: isLoadingBalance } = useBalanceApi();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (values: CoinFilterValues) => {
    setCurrentPage(1);
    setFilter({ title: values.title });
  };

  return (
    <Spacer>
      {isLoadingCoins || isLoadingBalance ? (
        <Skeleton />
      ) : (
        <CenterBlock>
          <Info balance={balance} filter={filter} handleFilterChange={handleFilterChange} />
          <CoinsList coins={coins} />
          <StyledPagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={total}
            onChange={handlePageChange}
            defaultPageSize={itemsPerPage}
          />
        </CenterBlock>
      )}
    </Spacer>
  );
};

const defaultFilter: CoinFilterValues = {
  title: '',
};

const Spacer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterBlock = styled.div`
  max-width: 500px;
`;

export const StyledPagination = styled(Pagination)`
  margin-top: 20px;
`;
