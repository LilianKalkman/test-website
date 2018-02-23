import React, { Component } from 'react';
import { Link } from 'react-router';
import SampleProducts from './sample-products';

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
        <div className="products">{this.state.products.name}</div>
        <div>
          <Link to="/" type="button" className="btn btn-primary">Back</Link>
        </div>
      </div>
    );
  }
}

export default App;
