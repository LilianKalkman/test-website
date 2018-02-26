import React, { Component } from 'react';
import { Link } from 'react-router';

class ShowProduct extends Component{
  constructor(){
    super();

    this.state = { product: {}}
  }
  render(){
    return(
      <div>
        <div>Show product here</div>
        <Link to="/products">Back To Products</Link>
      </div>
    );
  }
}

export default ShowProduct;
