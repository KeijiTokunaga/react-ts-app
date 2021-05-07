import React from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductsProps = {
  products: Product[];
};

export const FilterableProductTable: React.FC<ProductsProps> = (props) => {
  return (
    <>
      <SearchBar />
      <ProductTable products={props.products} />
    </>
  );
};
