import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import { Link } from 'react-router';

class Products extends Component {
  render(){
    const { details } = this.props
    return (
      <div className="product-item">
        <h3 className="product-name">{details.name}</h3>
        <h6 className="price">Price: {formatPrice(details.price)}</h6>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <span><button>Add to Order</button></span>
      </div>
    );
  }
}

export default Products;
