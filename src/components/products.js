import React, { Component } from 'react';
import { formatPrice } from '../helpers';

class Products extends Component {
  constructor(){
    super();

    this.goToShow = this.goToShow.bind(this);
  }

  goToShow(index){
    const productId = this.props.details.name
    console.log({productId});
    this.context.router.transitionTo(`/products/${productId}`);
  }


  render(){
    const { details, index } = this.props
    return (
      <div className="product-item">
        <h3 className="product-name">{details.name}</h3>
        <h6 className="price">Price: {formatPrice(details.price)}</h6>
        <img src={details.image} alt={details.name}/>
        <p>{details.desc}</p>
        <button onClick={() => this.goToShow(index)}>See Details</button>
        <span><button onClick={() => this.props.addToOrder(index)}>Add to Order</button></span>
      </div>
    );
  }
}

Products.contextTypes = {
  router: React.PropTypes.object
}

export default Products;
