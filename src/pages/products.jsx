import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  function handleRedirect(id) {
    navigate(`/products/${id}`);
  }
  return (
    <div>
      <div className="container filter_container">
        <div className="form">
          <div className="form_inputs">
            <div className="form_input">
              <h3>Search Products</h3>
              <input type="text" placeholder="Products" />
            </div>
            <div class="select-box">
              <h4 class="title">Select Category</h4>
              <select id="vaqt">
                <option value="">all</option>
                <option value="Tables">Tables</option>
                <option value="Chairs">Chairs</option>
                <option value="Kids">Kids</option>
                <option value="Sofas">Sofas</option>
                <option value="Beds">Beds</option>
              </select>
            </div>
            <div class="select-box">
              <h4 class="title">Select Company</h4>
              <select id="vaqt">
                <option value="">all</option>
                <option value=""></option>
                <option value="Luxora">Luxora</option>
                <option value="Artifex">Artifex</option>
                <option value="Comfora">Comfora</option>
                <option value="Homestead">Homestead</option>
              </select>
            </div>
            <div class="select-box">
              <h4 class="title">Sort By</h4>
              <select id="vaqt">
                <option value="">a-z</option>
                <option value="z-a">z-a</option>
                <option value="high">high</option>
                <option value="low">low</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button id="search">SEARCH</button>
            <button id="reset">RESET</button>
          </div>
        </div>
      </div>
      <div className="container card_container">
        {products.length > 0 &&
          products.map(function (product, index) {
            return (
              <div
                className="block"
                key={index}
                onClick={() => {
                  handleRedirect(product.id);
                }}
              >
                <img src={product.attributes.image} alt="Product Image" />
                <h3>{product.attributes.title}</h3>
                <p>{product.attributes.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default products;
