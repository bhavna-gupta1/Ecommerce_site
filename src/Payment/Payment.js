import React from 'react'
import './Payment.css'
import { useNavigate } from 'react-router-dom'
function Payment() {
    const navigate=useNavigate()
    function continue_pay(){
        navigate('/summary')
    }
  return (
    <>
    <div className='payment_pg_customer'>
   {/* Step Navigation */}
   <div className="step-navigation_customer">
  <div className="step-item_customer">
    <div className="step active_customer">1</div>
    <p className="step-label_customer">Cart</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">2</div>
    <p className="step-label_customer">Address</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">3</div>
    <p className="step-label_customer">Payment</p>
  </div>
  <div className="line_customer"></div>
  <div className="step-item_customer">
    <div className="step_customer">4</div>
    <p className="step-label_customer">Summary</p>
  </div>
</div>
<div className='main_payment_div_customer'>
{/* left side div */}
<div className='left_payment_customer'>

</div>

  {/* right side */}
  <div className="product_right_side_customer">
    <div className="price_detail_container_customer">
      <div className="pice_detail_customer">
        <h4>Price Detail</h4>
        <div>
          <div className="total_price_customer">
            <p>Total product price</p>
            <p>200</p>
          </div>
          <div className="total_discount_customer">
            <p>Total Discount</p>
            <p>400</p>
          </div>
        </div>
      </div>

      <hr />
      <div className="order-total_customer">
        <h4>Order Total</h4>
        <p>700</p>
      </div>
      <div className="total_discount_msg_customer">
        <p> % Yah, your total discount is 20rs</p>
      </div>
      <div className="continue_customer">
        <p>Click on continue will not deduct any money</p>
        <button  onClick={continue_pay}>continue</button>
        
      </div>
    </div>
  </div>
    </div>
    
    </div>
    </>
  )
}

export default Payment;