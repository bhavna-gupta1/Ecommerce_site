import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetailCustomer.css';

function ProductDetail() {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate=useNavigate()
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/api/product-details/?product_id=${product_id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data?.product_image_url?.split(',')[0]);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch product details');
        setLoading(false);
      });
  }, [product_id,API_URL]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product details available</p>;

  const imageUrls = product.product_image_url.split(',');
function Addcart(){
navigate("/addtocart")
}

  return (
    <div className="product-detail-container_customer">
      {/* Left Section: Images */}
      <div className="product-images-section_customer">
        <div className="small-images_customer">
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(url)}
              className="thumbnail_customer"
            />
          ))}
        </div>
        <div className="main-image_customer">
          <img src={selectedImage} alt="Selected Product" />
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="product-details-section_customer">
        <h1>{product.product_name}</h1>
        <p className="price_customer">${product.product_fixed_price}</p>
        <p>Category: {product.product_category_details?.category_name || 'N/A'}</p>
        <p>Sub-Category: {product.product_sub_category_details?.sub_category_name || 'N/A'}</p>
        <p>{product.product_description}</p>
        
        <div className="product-specifications_customer">
          <h3>Specifications:</h3>
          <ul>
            <li>Weight: {product.product_specifications?.weight || 'N/A'}</li>
            <li>Battery Life: {product.product_specifications?.battery_life || 'N/A'}</li>
            <li>Color: {product.product_specifications?.color || 'N/A'}</li>
            <li>Dimensions: {product.product_specifications?.dimensions || 'N/A'}</li>
          </ul>
        </div>

       

        <div className="product-actions_btn_customer">
          <button className="add-to-cart_customer" onClick={Addcart}>Add to Cart</button>
          <button className="buy-now_customer">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
