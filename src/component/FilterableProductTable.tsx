import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import { Product } from '../model/product';

type ProductsProps = {
  products: Product[];
};

export const FilterableProductTable: React.FC<ProductsProps> = (props) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const changeFilterText = (v: string) => {
    setFilterText(v);
  };
  const changeInStockOnly = (v: boolean) => {
    setInStockOnly(v);
  };

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        changeFilterText={changeFilterText}
        changeInStockOnly={changeInStockOnly}
      />
      <ProductTable
        products={props.products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
