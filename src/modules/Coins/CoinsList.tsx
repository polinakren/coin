import { ApiCoinsGet200ResponseDataInner as ICoin } from 'coin-api-client';
import styled from '@emotion/styled';

import { CoinCard } from '~modules/Coins/CoinCard';
import { ModalForm } from '~components';
import { BuyForm } from '~modules/Coins/BuyForm';

interface CoinsListProps {
  coins?: ICoin[];
}

export const CoinsList = ({ coins }: CoinsListProps) => {
  const { closeModal, isOpenedModal, openModal, setCurrentItem, currentItem } = ModalForm.useModalForm<ICoin>();

  const buyHandler = (record: ICoin) => {
    setCurrentItem({
      item: record,
    });
    openModal();
  };

  return (
    <Spacer>
      {coins && coins.map(coin => <CoinCard buyHandler={buyHandler} key={coin.id} coin={coin} />)}
      <BuyForm key={currentItem?.item?.id} open={isOpenedModal} onClose={closeModal} coin={currentItem?.item} />
    </Spacer>
  );
};

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
