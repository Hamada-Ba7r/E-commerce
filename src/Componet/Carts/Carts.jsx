import React from "react";
import "./carts.css";
const Carts = ({ cartItems, deleteProduct }) => {
  let totle = 0;
  return (
    <div className="carts container">
      {cartItems.length == 0 ? (
        <h2 className="no-product">No Exists Products In Cart</h2>
      ) : (
        ""
      )}
      <div className="cart">
        <div className="cart-items">
          {cartItems.map(function (item) {
            totle = totle+ item.price
            return (
              <div className="cart-item">
                <img src={item.image} alt="image Product" />
                <h3 className=" text-dark">Price :{item.price} $</h3>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteProduct(item)}
                >
                  Remove Product
                </button>
              </div>
            );
          })}
        </div>
        <div className="total">
          <div>
            <h3>Totle</h3>
            <h3>{totle}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
