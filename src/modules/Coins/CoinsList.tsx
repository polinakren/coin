import { ApiCoinsGet200ResponseDataInner } from 'coin-api-client';
import styled from '@emotion/styled';

import { CoinCard } from '~modules/Coins/CoinCard';
import { ModalForm } from '~components';
import { BuyForm } from '~modules/Coins/BuyForm';

interface CoinsListProps {
  coins?: ApiCoinsGet200ResponseDataInner[];
}

export const CoinsList = ({ coins }: CoinsListProps) => {
  const { closeModal, isOpenedModal, openModal, setCurrentItem, currentItem } =
    ModalForm.useModalForm<ApiCoinsGet200ResponseDataInner>();

  const buyHandler = (record: ApiCoinsGet200ResponseDataInner) => {
    setCurrentItem({
      item: record,
    });
    openModal();
  };

  return (
    <Spacer>
      {coins?.map(coin => <CoinCard buyHandler={buyHandler} key={coin.id} coin={coin} />)}
      <BuyForm open={isOpenedModal} onClose={closeModal} coin={currentItem?.item} />
    </Spacer>
  );
};

const Spacer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
