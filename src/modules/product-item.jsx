import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;
    return (
      <div className="col-4 my-2">
        <div className="card" style={{ width: "22rem", padding: "0px" }}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body" style={{ padding: "10px" }}>
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.price}$</p>
            <div className="">
              <button
                className="btn btn-dark " style={{marginBottom:"20px"}}
                onClick={() => {
                  setStateModal(item);
                }}
              >
                View detail
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
