import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Products extends Component {
  render(){
    const { details, index } = this.props
    return (
      <div className="product-item">
        <h3 className="product-name">{details.name}</h3>
        <h6 className="price">Price: {formatPrice(details.price)}</h6>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <span><button onClick={() => this.props.addToOrder(index)}>Add to Order</button></span>
      </div>
    );
  }
}

export default Products;
