import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Products extends Component {
  render(){
    const { details } = this.props
    return (
      <div className="product-item">
        <h3 className="fish-name">{details.name}</h3>
        <h6 className="price">Price: {formatPrice(details.price)}</h6>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
      </div>
    );
  }
}

export default Products;
