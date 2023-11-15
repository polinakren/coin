import { Typography } from 'antd';
import styled from '@emotion/styled';

import { Palette } from '~utils/Palette';
import { ApiBalanceGet200ResponseData } from 'coin-api-client';

type InfoProps = {
  balance: ApiBalanceGet200ResponseData['balance'];
};

export const Info = ({ balance }: InfoProps) => {
  return (
    <>
      <StyledTitle>Balance: {balance}</StyledTitle>
    </>
  );
};

const StyledTitle = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 20px;
  font-weight: 865;
`;
