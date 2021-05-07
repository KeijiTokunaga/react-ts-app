import React from 'react';

export const ProductCategoryRow: React.FC<{ category: string }> = ({
  category,
}) => {
  return (
    <tr>
      <th>{category}</th>
    </tr>
  );
};
