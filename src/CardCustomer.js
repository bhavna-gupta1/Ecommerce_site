import React, { useEffect, useState } from 'react';
import './CardCustomer.css';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  // Fetch products from API
  useEffect(() => {
    fetch(`${API_URL}/api/user/listproductitem/`)
      .then(response => response.json())
      .then(data => setProducts(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, [API_URL]);

  // Navigate to product detail page with the product ID
  const viewMore = (product_id) => {
    navigate(`/ProductDetail/${product_id}`);
  };
  // useEffect(()=>{
  //   fetch(url)
  //   .then(res=>res.json())
  //   .then(data=>setProducts(data.results))
  //   .catch(error=>console.error("error in fetching data ",error))
  // },[])

  return (
    <div className="main_div_customer">
      <div className="heading_customer">
        <h1>Led Lights</h1>
        <h4>See All</h4>
      </div>
      <div className="cards-container-wrapper_customer">
        <div className="cards-container_customer">
          {products.map((product) => (
            <div className="shopping-card_customer" key={product.id}>
              <img
                src={product.product_image_url.split(',')[0]} // Show first image
                alt={product.product_name}
                className="product-img_customer"
              />
              <div className="card-content_customer">
                <div className="card-header_customer">
                  <h3 className="product-title_customer">{product.product_name}</h3>
                  {/* <div className="rating">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </div> */}
                </div>
                <div className="card-footer_customer">
                  <p className="price_customer">{`$${product.product_fixed_price}`}</p>
                </div>
              </div>
              <button className="view-more-btn_customer" onClick={() => viewMore(product.id)}>
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
