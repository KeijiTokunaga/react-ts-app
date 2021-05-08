import React from 'react';

type Props = {
  filterText: string;
  inStockOnly: boolean;
  changeFilterText: (v: string) => void;
  changeInStockOnly: (v: boolean) => void;
};

export const SearchBar: React.FC<Props> = ({
  filterText,
  inStockOnly,
  changeFilterText,
  changeInStockOnly,
}) => {
  const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFilterText(e.target.value);
  };

  const handleInStockOnly = () => {
    changeInStockOnly(!inStockOnly);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterText}
      />
      <p>
        <input
          type="checkbox"
          defaultChecked={inStockOnly}
          onChange={handleInStockOnly}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};
