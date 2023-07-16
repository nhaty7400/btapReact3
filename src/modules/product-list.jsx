import React, { Component } from "react";
import ProductItem from "./product-item";

export default class ProductList extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <ProductItem
                item={product}
                key={product.id}
                setStateModal={this.props.setStateModal}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
