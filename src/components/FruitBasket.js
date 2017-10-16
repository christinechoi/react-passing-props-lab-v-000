import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = ({fruit, filters, updateFilterCallback, currentFilter}) =>
  <div className="fruit-basket">
    <Filter 
      filters={filters} 
      handleChange={updateFilterCallback} />
    <FilteredFruitList
      filter={currentFilter} 
      fruit={fruit} />
  </div>




FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: ""
}


export default FruitBasket;
