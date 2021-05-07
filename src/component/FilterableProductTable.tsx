import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

type ProductsProps = React.ComponentProps<typeof ProductTable>;

export const FilterableProductTable: React.FC<ProductsProps> = (props) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={props.products} />
    </>
  );
};
