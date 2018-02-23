import React, { Component } from 'react';

class Order extends Component {
  constructor(){
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    const product = this.props.products[key];
    const count = this.props.order[key];
    return(
      <li key={key}>{product.name} {count}x</li>
    )
  }

  render(){
    const orderIds = Object.keys(this.props.order);

    return(
      <div className="order-list">
        <h2>Your Order</h2>
        {orderIds.map(this.renderOrder)}
        <h6>Total:</h6>
      </div>
    );
  }
}

export default Order;
