import React, { useEffect, useState } from "react";
import "../App.css";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

function productDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          setProduct(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container details_container">
      {product.id && (
        <>
          <div className="details">
            <img src={product.attributes.image} />
            <div className="details_title">
              <h2>{product.attributes.title}</h2>
              <h3>{product.attributes.company}</h3>
              <h4>${product.attributes.price}</h4>
              <p>{product.attributes.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default productDetails;
