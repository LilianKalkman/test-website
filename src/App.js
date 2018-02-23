import React, { Component } from 'react';
import { Link } from 'react-router';
import SampleProducts from './sample-products';
import Products from './components/products';

class App extends Component {
  constructor(){
    super();

    this.state = {
      products: {},
      order: {},
    }

    this.loadSampleProducts = this.loadSampleProducts.bind(this);
  }

  componentDidMount(){
    this.loadSampleProducts();
  }

  loadSampleProducts(){
    this.setState({
      products: SampleProducts
    });
  }

  render() {
    return (
      <div>
        <ul className="products"> {
            Object
            .keys(this.state.products)
            .map(productkey => <Products key={productkey} index={productkey} details={this.state.products[productkey]}/>)
          }/>
        </ul>
        <div>
          <Link to="/" type="button" className="btn btn-primary">Back</Link>
        </div>
      </div>
    );
  }
}

export default App;
