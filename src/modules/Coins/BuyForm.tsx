import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { notification, Skeleton } from 'antd';
import { ApiCoinsGet200ResponseDataInner as ICoin } from 'coin-api-client';

import { Input, ModalForm } from '~components';
import { useBalanceApi, useCoinActions, useCoinPriceByIdApi } from '~modules/Coins/hooks';
import { object, number } from '~utils/validation';

const MAX_COINS = 1;
const MIN_COINS = 1;

export type GroupsFormProps = {
  open: boolean;
  onClose: () => void;
  coin?: ICoin;
};

interface BuyFormValuesType {
  count: number;
}

export const BuyForm = ({ open, onClose, coin }: GroupsFormProps) => {
  const { t } = useTranslation(['common']);
  const { balance, isLoading: isLoadingBalance } = useBalanceApi();
  const { price, isLoading: isLoadingPrice } = useCoinPriceByIdApi(coin?.id);
  const { transferCoins } = useCoinActions();

  const possibleCoins = getPossibleCoins(balance, price);
  const buySchema = getScheme(possibleCoins);

  const handleSubmitForm = async (values: BuyFormValuesType) => {
    const amount = price ? values.count * price : 0;

    // Use API call in other environments
    // await transferCoins({
    //   id: coin?.id!,
    //   apiCoinsIdTransferPostRequest: { amount: amount },
    // });

    // Use simple variant to get success during development
    await buySchema.validate(values);
    handleSuccessNotification();
    onClose();
  };

  const handleSuccessNotification = () => {
    notification.success({
      message: t('message.title'),
      description: t('message.description'),
    });
  };

  return (
    <>
      {isLoadingBalance || isLoadingPrice ? (
        <Skeleton />
      ) : (
        <ModalForm<BuyFormValuesType>
          open={open}
          title={`${t('action.buy')} ${coin?.title} ${t('title.by')} ${price}¢`}
          okText={t('action.buy')}
          onCancel={onClose}
          cancelText={t('action.cancel')}
          onOk={handleSubmitForm}
          formProps={{
            initialValues: { count: possibleCoins },
            validationSchema: buySchema,
          }}
        >
          <StyledInput name='count' placeholder={t('title.buy')} />
        </ModalForm>
      )}
    </>
  );
};

const StyledInput = styled(Input)`
  width: 470px;
`;

const getPossibleCoins = (balance?: number, price?: number) => {
  if (balance === undefined || price === undefined || price === 0) {
    return 0;
  } else {
    return Math.ceil(balance / price);
  }
};

const getScheme = (possibleCoins?: number) => {
  return object({
    count: number()
      .required()
      .max(possibleCoins || MAX_COINS)
      .min(MIN_COINS),
  });
};
