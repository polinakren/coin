import React from 'react';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input, Typography } from 'antd';
import styled from '@emotion/styled';
import { ApiBalanceGet200ResponseData as IBalance } from 'coin-api-client';

import { Palette } from '~utils/Palette';

export interface CoinFilterValues {
  title: string;
}

type InfoProps = {
  balance?: IBalance['balance'];
  handleFilterChange: (values: CoinFilterValues) => void;
  filter: CoinFilterValues;
};

export const Info = ({ balance, filter, handleFilterChange }: InfoProps) => {
  const { t } = useTranslation(['common']);

  return (
    <Spacer>
      <StyledTitle>
        {t('title.balance')}: {balance}¢
      </StyledTitle>
      <Form>
        <Input
          name={'title'}
          type={'text'}
          value={filter.title}
          placeholder={'Search'}
          onChange={e => handleFilterChange({ title: e.target.value })}
          autoFocus
          allowClear
          addonAfter={<SearchOutlined />}
        />
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
