import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import styled from '@emotion/styled';
import { ApiBalanceGet200ResponseData } from 'coin-api-client';

import { Palette } from '~utils/Palette';
import { Form, Input as CompInput } from '~components';

export interface CoinFilterValues {
  title: string;
}

type InfoProps = {
  balance: ApiBalanceGet200ResponseData['balance'];
  onFilterChange: (values: CoinFilterValues) => void;
  filter: CoinFilterValues;
};

export const Info = ({ balance, filter, onFilterChange }: InfoProps) => {
  return (
    <Spacer>
      <StyledTitle>Balance: {balance}</StyledTitle>
      <Form initialValues={{ filter }} onValuesChange={onFilterChange}>
        <CompInput name='title' placeholder={'Search'} addonAfter={<SearchOutlined />} />
      </Form>
    </Spacer>
  );
};

const StyledTitle = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 20px;
  font-weight: 865;
`;

const Spacer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
