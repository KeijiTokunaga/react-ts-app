import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable';
import { Product } from '../model/product';
import { useHistory } from 'react-router-dom';

type Props = {
  products: Product[];
};

export const FilterableProductTable: React.FC<Props> = ({ products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [testState, setTestState] = useState(false);
  const history = useHistory();
  console.log(`TOP:${testState}`);
  return (
    <>
      <button onClick={() => history.push('/hello')}>Next</button>
      <button onClick={() => setTestState(true)}>Set</button>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
};
