import React from 'react';


const FilteredFruitList = ({fruit, filter}) => {
  const fruits = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

  return (
    <ul className="fruit-list"> 
      {fruits.map((fruit, index) => 
        <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};


FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ""
}

export default FilteredFruitList;
