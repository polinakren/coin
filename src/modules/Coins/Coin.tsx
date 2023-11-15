import { useState } from 'react';
import { Skeleton, Pagination } from 'antd';
import styled from '@emotion/styled';

import { useBalanceApi, useCoinApi } from '~modules/Coins/hooks';
import { CoinsList } from '~modules/Coins/CoinsList';
import { Palette } from '~utils/Palette';
import { Info } from '~modules/Coins/Info';

export const Coin = () => {
  const itemsPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const { coins, total, isLoading: isLoadingCoins } = useCoinApi({ page: currentPage, limit: itemsPerPage });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Spacer>
      {isLoadingCoins ? (
        <Skeleton />
      ) : (
        <>
          <Info balance={3} />
          <CoinsList coins={coins} />
          <StyledPagination
            current={currentPage}
            pageSize={itemsPerPage}
            total={total}
            onChange={handlePageChange}
            defaultPageSize={itemsPerPage}
          />
        </>
      )}
    </Spacer>
  );
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
