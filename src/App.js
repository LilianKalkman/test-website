import React, { Component } from 'react';
import { Link } from 'react-router';
import SampleProducts from './sample-products';
import Products from './components/products';
import Order from './components/order';

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: {},
      order: {},
    }

    this.loadSampleProducts = this.loadSampleProducts.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);
  }

  componentDidMount(){
    this.loadSampleProducts();
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
    order[product] = null;
    this.setState({ order });
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
          <Link to="/" type="button" className="btn btn-primary">Back</Link>
        </div>
        <div>
            <Order
              order={this.state.order}
              products={this.state.products}
              removeOrder={this.removeOrder}
              />
        </div>
      </div>
    );
  }
}

export default App;
