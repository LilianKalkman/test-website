import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Order extends Component {
  constructor(){
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    const product = this.props.products[key];
    const count = this.props.order[key];
    const removeButton = <button>&times;</button>;

    if(!product || product.status === 'unavailable'){
      return(<li key={key}>Sorry, { product ? product.name : 'product'} is not available</li>)
    }

    return(
      <li key={key}>
        <span className="count">{count}x </span>
        <span> {product.name} </span>
        <span className="price"> {formatPrice(count * product.price)}</span>
        <span> {removeButton}</span>
      </li>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const product = this.props.products[key];
      const count = this.props.order[key];
      const isAvailable = product && product.status === 'available';
      if(isAvailable){
        return prevTotal + (count * product.price || 0)
      };
      return prevTotal;
    }, 0);


    return(
      <div className="order-list">
        <h2>Your Order</h2>
        <ul className="order-ul">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          <strong>Total: {formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
