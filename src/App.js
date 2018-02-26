import React, { Component } from 'react';
import { Link } from 'react-router';
import SampleProducts from './sample-products';
import Products from './components/products';
import Order from './components/order';
import base from './base';
import Auth from './components/auth';
import AddProduct from './components/add_product_form';

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: {},
      order: {},
    }
    this.params = this.state;
    this.loadSampleProducts = this.loadSampleProducts.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  componentWillMount(){
    this.ref = base.syncState(`/products`,
    {
      context: this,
      state: 'products'
    });

    const localStorageRef = localStorage.getItem(`order`);
    if(localStorageRef){
      this.setState({
        order: JSON.parse(localStorageRef)
      })
    };
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  componentDidMount(){
    this.loadSampleProducts();
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order`, JSON.stringify(nextState.order));
  }

  loadSampleProducts(){
    this.setState({
      products: SampleProducts
    });
  }

  addToOrder(productkey){
    const order = {...this.state.order};
    order[productkey] = order[productkey] + 1 || 1;
    this.setState({ order });
  }

  removeOrder(product){
    const order = {...this.state.order};
    delete order[product];
    this.setState({ order });
  }

  addProduct(product){
    const products = {...this.state.products};
    const timestamp = Date.now();
    products[`product-${timestamp}`] = product;

    this.setState({ products });
  }

  render() {
    return (
      <div className="flex-container">
        <div>
          <ul className="products">
            {
              Object
              .keys(this.state.products)
              .map(productkey => <Products key={productkey} index={productkey} details={this.state.products[productkey]}
                addToOrder={this.addToOrder}/>)
            }
          </ul>
          <AddProduct addProduct={this.addProduct}/>
          <Link to="/" type="button" className="btn btn-primary">Back</Link>
        </div>
        <div>
            <Order
              order={this.state.order}
              products={this.state.products}
              removeOrder={this.removeOrder}
              />
            <Auth />
        </div>
      </div>
    );
  }
}

export default App;
