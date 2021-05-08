import React from 'react';

type SearchBarProps = {
  filterText: string;
  inStockOnly: boolean;
  changeFilterText: (v: string) => void;
  changeInStockOnly: (v: boolean) => void;
};

export const SearchBar: React.FC<SearchBarProps> = (props) => {
  const fileterText = props.filterText;
  const isStockOnly = props.inStockOnly;
  const changeFilterText = props.changeFilterText;
  const changeInStockOnly = props.changeInStockOnly;

  const handleFilterText = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeFilterText(e.target.value);
  };

  const handleInStockOnly = () => {
    changeInStockOnly(!isStockOnly);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={fileterText}
        onChange={handleFilterText}
      />
      <p>
        <input
          type="checkbox"
          defaultChecked={isStockOnly}
          onChange={handleInStockOnly}
        />{' '}
        Only show products in stock
      </p>
    </form>
  );
};
