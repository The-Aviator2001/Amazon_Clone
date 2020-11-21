import React, { useState,useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link,useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
   /// Data Layer Is being Used Which is the Context API
const history= useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  
  useEffect(() => {
    //generate OTP
    const getClientSecret = async () => {
      const response = await axios({
        //stripe expects to get value in sub currency
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket)} `
      });
       setClientSecret(response.data.clientSecret)

    };
    getClientSecret();
  }, [basket]);

  console.log('THE SECRET IS >>>>>>',clientSecret)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent =payment confirmation
      setSucceeded(true)
      setError(null)
      setProcessing(false)



dispatch({
   type:"EMPTY_BASKET"
})



      history.replace('./orders')
    })
  };

  const handleChange = (e) => {
    // listen for changes in the Card Element
    //and display any errors as the customers types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout( {<Link to="/checkout">{basket?.length}items)</Link>}</h1>

        {/* Payment Section */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>J.C Mallick Road, Hirapur</p>
            <p>Dhanbad,Jharkhand,India,Pin-826001</p>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe For this E-commerce */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total :{value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
            </form>

            {/* error  */}
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
