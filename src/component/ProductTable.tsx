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
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((v) => (
          <>
            <ProductCategoryRow category={v.category} key={v.category} />
            <ProductRow product={v} key={v.name} />
          </>
        ))}
      </tbody>
    </table>
  );
};
