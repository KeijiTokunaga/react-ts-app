// import {useState} from 'react';
import './App.css';
import { FilterableProductTable } from './component/FilterableProductTable';
import { PRODUCTS } from './model/product';

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
