import { useState, useEffect } from 'react';
import './App.css';
import { FilterableProductTable } from './component/FilterableProductTable';
import { Product } from './model/product';
import axios from 'axios';

function App() {
  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3001/shopdata');
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <FilterableProductTable products={data} />
    </>
  );
}

export default App;
