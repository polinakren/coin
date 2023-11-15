import { ApiCoinsGet200ResponseDataInner } from 'coin-api-client';
import styled from '@emotion/styled';
import { Typography } from 'antd';

import { Palette } from '~utils/Palette';

type CoinCardProps = {
  coin: ApiCoinsGet200ResponseDataInner;
};

export const CoinCard = ({ coin }: CoinCardProps) => {
  const { title, network, status } = coin;

  return (
    <Spacer>
      <div>
        <StyledTitle>Title</StyledTitle>
        <StyledName>{title}</StyledName>
      </div>
      <div>
        <StyledTitle>Network</StyledTitle>
        <StyledName>{network}</StyledName>
      </div>
      <div>
        <StyledTitle>Status</StyledTitle>
        <StyledName>{status}</StyledName>
      </div>
    </Spacer>
  );
};

const Spacer = styled.div`
  min-width: 400px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0 0 14px 0 rgba(176, 165, 209, 0.4);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 25px 0 rgba(159, 140, 220, 0.7);
  }
`;

export const StyledTitle = styled(Typography)`
  color: ${Palette.white_600};
  font-size: 14px;
  font-weight: 500;
`;

export const StyledName = styled(Typography)`
  color: ${Palette.secondary_800};
  font-size: 14px;
  font-weight: 500;
`;
