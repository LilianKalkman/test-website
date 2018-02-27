import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Order extends Component {
  constructor(){
    super();

    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    const product = this.props.products[key];
    const count = this.props.order[key];
    const removeButton = <button onClick={()=>this.props.removeOrder(key)}>&times;</button>;

    if(!product || product.status === 'unavailable'){
      return(<li key={key}>Sorry, { product ? product.name : 'product'} is not available
    {removeButton}</li>)
    }

    return(
      <li key={key}>
        <CSSTransitionGroup
          component="span"
          className="count"
          transitionName="count"
          transitionEnterTimeout={250}
          transitionLeaveTimeout={250}>
          <span key={count}>{count}x </span>
        </CSSTransitionGroup>
        <CSSTransitionGroup
          component="span"
          className="order"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          <span>{product.name}</span>
        </CSSTransitionGroup>
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

// Order.propTypes = {
//   removeOrder: React.PropTypes.func.isRequired,
//   products: React.PropTypes.object.isRequired,
//   order: React.PropTypes.object.isRequired,
// }

export default Order;
