import { useState, useEffect } from 'react';
import './App.css';
import { FilterableProductTable } from './component/FilterableProductTable';
import { Product } from './model/product';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HelloSomeone } from './component/Hello';

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
    <Router>
      <Switch>
        <Route path="/" exact>
          <FilterableProductTable products={data} />
        </Route>
        <Route path="/hello" exact>
          <HelloSomeone />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
