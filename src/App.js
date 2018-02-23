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

  render() {
    return (
      <div>
        <ul className="products"> {
            Object
            .keys(this.state.products)
            .map(productkey => <Products key={productkey} index={productkey} details={this.state.products[productkey]}
              addToOrder={this.addToOrder}/>)
          }
        </ul>
        <div className="order-body">
          <div className="container">
              <Order
                order={this.state.order}
                products={this.state.products}
                />
          </div>
        </div>
        <div>
          <Link to="/" type="button" className="btn btn-primary">Back</Link>
        </div>
      </div>
    );
  }
}

export default App;
