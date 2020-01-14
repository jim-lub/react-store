import React from 'react';

interface Props {
  children?: React.ReactNode
}

const StoreProvider = ({ children }: Props) => {
  return (
    <>
      { children }
    </>
  );
}

export default StoreProvider;
