import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content, setStateModal } = this.props;
    return (
      <div>
        <div style={{ display: "block" }} className="modal" tabIndex={-1}>
          <div
            className="modal-dialog modal-dialog-centered"
            style={{ width: "800px", maxWidth: "800px" }}
          >
            <div className="modal-content" style={{ width: "800px" }}>
              <div className="modal-header">
                <h5 className="modal-title">Product detail</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-4">
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={content.image}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Name:</td>
                          <td>{content.name}</td>
                        </tr>
                        <tr>
                          <td>Price:</td>
                          <td>{content.price}$</td>
                        </tr>
                        <tr>
                          <td>Quantity:</td>
                          <td>{content.quantity}</td>
                        </tr>
                        <tr>
                          <td>Description:</td>
                          <td>{content.description}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setStateModal(null);
                  }}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
