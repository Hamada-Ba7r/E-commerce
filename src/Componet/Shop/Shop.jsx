import React, { useEffect, useState } from "react";
import "./shop.css";
import { Link } from "react-router-dom";
const Shop = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(function (data) {
        setProducts(data);
      });
  }, []);

  return (
    <section className="products-shop">
      <div className="title">
        <h1 className=" text-primary">Fake Api Products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          architecto sint labore provident eaque mollitia aliquid ratione
          adipisci expedita pariatur! Corrupti sit deleniti assumenda ea
          accusantium molestiae nisi rerum aspernatur?
        </p>
      </div>
      <div className="products container">
        {products.map(function (product) {
          return (
            <div className="product" key={product.id}>
              <img src={product.image} alt="image Product" />
              <h3> {product.title.slice(0, 10)}</h3>
              <h4>Price :{product.price} $</h4>
              <h4>Count : {product.rating.count}</h4>
              <Link to={`/More/${product.id}`}>
                <button className="btn btn-primary w-75 m-auto d-block">
                  More Details
                </button>
              </Link>

              <button
                onClick={() => props.addToCart(product)}
                className="btn btn-primary d-block mt-2 w-75 m-auto"
              >
                Add To Cart
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Shop;
