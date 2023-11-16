import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { notification, Skeleton } from 'antd';
import { ApiCoinsGet200ResponseDataInner as ICoin } from 'coin-api-client';

import { Input, ModalForm } from '~components';
import { useBalanceApi, useCoinActions, useCoinPriceByIdApi } from '~modules/Coins/hooks';
import { object, number } from '~utils/validation';

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
    notification.success({
      message: t('message.title'),
      description: t('message.description'),
    });
    onClose();
  };

  return (
    <>
      {isLoadingBalance || isLoadingPrice ? (
        <Skeleton />
      ) : (
        <ModalForm<BuyFormValuesType>
          open={open}
          title={t('title.buy')}
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
  if (balance === undefined || price === undefined) {
    return 0;
  } else {
    return Math.ceil(balance / price);
  }
};

const getScheme = (possibleCoins?: number) => {
  if (possibleCoins) {
    return object({
      count: number().required().max(possibleCoins).min(1),
    });
  } else {
    return object({
      count: number().required().max(1).min(1),
    });
  }
};
