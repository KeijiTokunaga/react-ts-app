import React from 'react';

export const ProductCategoryRow: React.FC<{ category: string }> = ({
  category,
}) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};
