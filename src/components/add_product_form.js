import React, { Component } from 'react';

class AddProduct extends Component {
  createProduct(event){
    event.preventDefault();

    const product = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }

    this.props.addProduct(product);
    this.formInput.reset();
  };

  render(){
    return(
      <form ref={(input) => this.formInput = input} className="product-edit" onSubmit={this.createProduct.bind(this)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Product Name"/>
        <input ref={(input) => this.price = input} type="text" placeholder="Product Price"/>
        <select ref={(input) => this.status = input}>
          <option value="available">Available!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Product Desc"></textarea>
        <input ref={(input) => this.image = input} type="text" placeholder="Product Image"/>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddProduct;
