import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./more.css";

const More = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then(function (data) {
        setProduct(data);
      });
  }, []);

  return (
    <div className="prodact ">
      <img src={product.image} alt="" />
      <div>
        <h2 className=" text-primary">{product.category}</h2>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>price: $ {product.price}</h4>
      </div>
    </div>
  );
};

export default More;
