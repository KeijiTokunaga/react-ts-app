import React from 'react';
import { ProductCategoryRow } from './ProductCategoryRow';
import { ProductRow } from './ProductRow';

type Product = {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
};

type ProductProps = {
  products: Product[];
};

export const ProductTable: React.FC<ProductProps> = (props) => {
  const rows: JSX.Element[] = [];
  let lastCategory: string = '';

  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};
