import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


const FruitBasket = props => {
  <div className="fruit-basket">
    <Filter handleChange={props.updateFilterCallback} />
    <FilteredFruitList
      filter={props.currentFilter} fruit={props.fruit} />
  </div>
}


  

// class FruitBasket extends Component {
//   constructor() {
//     super();

//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }

//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }

//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.props.currentFilter} />
//       </div>
//     );
//   }
// }

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: [],
  updateFilterCallback: null
}


export default FruitBasket;
