import React, { Component } from 'react';
import { Link } from 'react-router';

class ShowProduct extends Component{
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
