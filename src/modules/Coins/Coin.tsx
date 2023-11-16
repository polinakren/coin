import React, { useState } from 'react';
import { Skeleton, Pagination } from 'antd';
import styled from '@emotion/styled';

import { useCoinApi } from '~modules/Coins/hooks';
import { CoinsList } from '~modules/Coins/CoinsList';
import { CoinFilterValues, Info } from '~modules/Coins/Info';
import { Palette } from '~utils/Palette';

export const Coin = () => {
  const itemsPerPage = 5;

  const [filter, setFilter] = useState<CoinFilterValues>(defaultFilter);

  const [currentPage, setCurrentPage] = useState(1);

  const {
    coins,
    total,
    isLoading: isLoadingCoins,
  } = useCoinApi({ page: currentPage, limit: itemsPerPage, title: filter.title });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onValuesChange = (values: CoinFilterValues) => {
    console.log(values);
    setCurrentPage(1);
    setFilter(values);
  };

  return (
    <Spacer>
      {isLoadingCoins ? (
        <Skeleton />
      ) : (
        <CenterBlock>
          <Info balance={2} filter={defaultFilter} onFilterChange={onValuesChange} />
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

export const StyledPagination = styled(Pagination)`
  margin-top: 20px;
  
  .ant-pagination-item-active {
    border-color: ${Palette.primary_600};
  }
  
  .ant-pagination-item-active a {
    color: ${Palette.primary_600};
  }
`;

const CenterBlock = styled.div`
  max-width: 500px;
`;
