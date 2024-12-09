import React from 'react';
import './RawMaterial.css'
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import led from '../ledimg.png';
function RawMaterial() {
    const navigate=useNavigate()
    const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [price, setPrice] = useState(0);
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState([]);

  const toggleCategory = () => {
    setCategoryOpen(!isCategoryOpen);
  };
  const togglePrice = () => {
    setPriceOpen(!isPriceOpen);
  };
   // Toggle dropdown visibility
   const toggleRating = () => {
    setIsRatingOpen(!isRatingOpen);
  };
 // Navigate to product detail page with the product ID
 const viewMore = (product_id) => {
    navigate(`/ProductDetail/${product_id}`);
  };

  // Handle checkbox change
  const handleRatingChange = (event) => {
    const value = event.target.value;
    setSelectedRatings((prevRatings) => {
      if (prevRatings.includes(value)) {
        // Remove rating if it's already selected
        return prevRatings.filter((rating) => rating !== value);
      } else {
        // Add rating if it's not selected
        return [...prevRatings, value];
      }
    });
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setSelectedCategories((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      } else {
        return [...prevSelected, value];
      }
    });
  };
    // Handle price range selection
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };
  return (
    
    <>
      <div className='main_subdropdown_div_customer'>
        <div className='main_left_div_customer'>
          <div className='led_head_para_customer'>
            <h2>Led Finished Material</h2>
            <p>Showing 61-80 out of 10000 products</p>
          </div>
          <div className='dropdown_container_rawmaterial_customer'>
          <select className='dropdown_rawmaterial_customer'>
            <option value="relevance">Sort By: relevance</option>
            <option value="led1">LED 1</option>
            <option value="led2">LED 2</option>
            <option value="led3">LED 3</option>
            <option value="led4">LED 4</option>
            <option value="led5">LED 5</option>
          </select>
        </div>
        <div class="filter_customer">
  <p class="filter-title_customer">FILTERS</p>
  <hr class="filter-divider_customer" />
  <div className="filter-option_customer" onClick={toggleCategory}>
              <p>Category</p>
              <span>&#9662;</span>
            </div>
            {isCategoryOpen && (
              <div className="checkbox-group_customer">
                <label>
                  <input
                    type="checkbox"
                    value="Category1"
                    checked={selectedCategories.includes('Category1')}
                    onChange={handleCategoryChange}
                  />
                  Category 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Category2"
                    checked={selectedCategories.includes('Category2')}
                    onChange={handleCategoryChange}
                  />
                  Category 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Category3"
                    checked={selectedCategories.includes('Category3')}
                    onChange={handleCategoryChange}
                  />
                  Category 3
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Category4"
                    checked={selectedCategories.includes('Category4')}
                    onChange={handleCategoryChange}
                  />
                  Category 4
                </label>
              </div>
            )}

  <div class="filter-option_customer">
    <p>Size</p>
    <span>&#9662;</span>
  </div>
  <div className="filter-option_customer" onClick={togglePrice}>
              <p>Price</p>
              <span>&#9662;</span>
            </div>
            {isPriceOpen && (
              <div className="slider-container_customer">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  value={price}
                  className="price-slider"
                  onChange={handlePriceChange}
                />
                <div className="slider-labels_customer">
                  <span>₹0</span>
                  <div className="slider-steps_customer">
                    <div className="step-line"></div>
                    <div className="step-line"></div>
                    <div className="step-line"></div>
                  </div>
                  <span>₹3000</span>
                </div>
                <div className="price-display_customer">
                  <span>Price: ₹{price}</span>
                </div>
              </div>
            )}

<div className='filter-item_rating_customer' onClick={toggleRating}>
            <p>Rating</p>
            <span>&#9662;</span>
          </div>
          {isRatingOpen && (
            <div className='rating-checkbox-group_customer'>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating}>
                  <input
                    type='checkbox'
                    value={rating}
                    checked={selectedRatings.includes(rating.toString())}
                    onChange={handleRatingChange}
                  />
                  {rating} Star{rating > 1 ? 's' : ''}
                </label>
              ))}
            </div>
          )}

        
  <div class="filter-option_customer">
    <p>Discount</p>
    <span>&#9662;</span>
  </div>
</div>

        </div>
        <div className='main_right_div_raw_customer'>
  <div className='material_card_content_customer'>
    <div className='pro_material_img_customer'>
      <img src={led} alt="Product"/>
    </div>
    <div className='material_product_content_customer'>
      <p className='product_name_customer'>CTI-SL 50W FT-D Street Light</p>
      <div className="price_section_customer">
      <span className="discounted_price_customer">₹ 249</span>
        <span className="original_price_customer">₹ 249</span>
        <span className="discount_percentage_customer">7% Off</span>
      </div>
      <div className="rating_customer">
        4.2 <FaStar />
      </div>
    </div>
    <button className="view_more_button_customer">View More
    </button>
  </div>
</div>

      </div>
    </>
  );
}

export default RawMaterial;
