import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";

function products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    axios
      .get("https://strapi-store-server.onrender.com/api/products")
      .then((response) => {
        if (response.status == 200) {
          setProducts(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container card_container">
      {products.length > 0 &&
        products.map(function (product, index) {
          return (
            <div className="block" key={index}>
              <img src={product.attributes.image} alt="" />
              <h3>{product.attributes.title}</h3>
              <p>{product.attributes.price}</p>
            </div>
          );
        })}
    </div>
  );
}

export default products;
