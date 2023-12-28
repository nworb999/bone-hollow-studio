import React from 'react';
import { useWindowSize } from '../utils';

type DynamicContentProps = {
  render: (mobileOrderFlag: boolean) => React.ReactNode;
};

const DynamicContent: React.FC<DynamicContentProps> = ({ render }) => {
  const size = useWindowSize();
  const mobileOrderFlag = size.width && size.width < 611? true : false;

  return <>{render(mobileOrderFlag)}</>;
};

export default DynamicContent;
