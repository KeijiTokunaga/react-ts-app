import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

type Props = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

export const FilterableProductTable = (props: Props) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={props.product} />
    </>
  );
};
