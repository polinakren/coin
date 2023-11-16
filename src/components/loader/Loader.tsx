import { Spin, SpinProps } from 'antd';

type LoaderProps = SpinProps;

export const Loader = ({ ...props }: LoaderProps) => {
  return <Spin {...props} />;
};
