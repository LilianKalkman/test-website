import React, { Component } from 'react';
import { formatPrice } from '../helpers';
import base from '../base';

class Order extends Component {
  constructor(){
    super();

    this.state = ({
      uid: null,
    });

    this.renderOrder = this.renderOrder.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.authHandler = this.authHandler.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
  base.onAuth((user)=> {
    if(user){
      this.authHandler(null, { user });
      }
    });
  }

  authenticate(provider){
    console.log(provider);
    base.authWithOAuthPopup(provider, this.authHandler);
  }

  authHandler(err, authData){
    console.log(authData);
    this.setState({
      uid: authData.user.id,
    });
  }

  logout(){
    base.unauth();
    this.setState({uid: null});
  }

  renderLogin(){
    return(
      <nav className="login">
        <button className="facebook" onClick={()=> this.authenticate('facebook')}>Sign in with Facebook</button>
      </nav>
    );
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
        <span className="count">{count}x </span>
        <span> {product.name} </span>
        <span className="price"> {formatPrice(count * product.price)}</span>
        <span> {removeButton}</span>
      </li>
    )
  }

  render(){
    const logout = <button onClick={()=>this.logout()}>Log out</button>
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

    // if(!this.state.uid){
    //   return(<div>{this.renderLogin()}</div>)
    // }

    return(
      <div className="order-list">
        <h2>Your Order</h2>
        <ul className="order-ul">
          {orderIds.map(this.renderOrder)}
        </ul>
        <div className="total">
          <strong>Total: {formatPrice(total)}</strong>
        </div>
        <div>{this.renderLogin()}</div>
          {logout}
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
