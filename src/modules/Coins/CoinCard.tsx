import { ApiCoinsGet200ResponseDataInner as ICoin } from 'coin-api-client';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

import { Palette } from '~utils/Palette';

type CoinCardProps = {
  coin: ICoin;
  buyHandler: (coin: ICoin) => void;
};

export const CoinCard = ({ coin, buyHandler }: CoinCardProps) => {
  const { title, network, status } = coin;
  const { t } = useTranslation(['common']);

  const onClick = () => buyHandler(coin);

  return (
    <Spacer onClick={onClick}>
      <div>
        <StyledTitle>{t('card.title')}</StyledTitle>
        <StyledName>{title}</StyledName>
      </div>
      <div>
        <StyledTitle>{t('card.network')}</StyledTitle>
        <StyledName>{network}</StyledName>
      </div>
      <div>
        <StyledTitle>{t('card.status')}</StyledTitle>
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
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 0 25px 0 rgba(92, 123, 255, 0.7);
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
