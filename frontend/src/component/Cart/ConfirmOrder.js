// import React, { Fragment } from "react";
// import CheckoutSteps from "../Cart/CheckoutSteps";
// import { useSelector } from "react-redux";
// import MetaData from "../layout/MetaData";
// import "./ConfirmOrder.css";
// import { Link } from "react-router-dom";
// import { Typography } from "@material-ui/core";

// const ConfirmOrder = ({ history }) => {
//   const { shippingInfo, cartItems } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.user);

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.quantity * item.price,
//     0
//   );

//   const shippingCharges = subtotal > 1000 ? 0 : 200;

//   const tax = subtotal * 0.18;

//   const totalPrice = subtotal + tax + shippingCharges;

//   const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

//   const proceedToPayment = () => {
//     const data = {
//       subtotal,
//       shippingCharges,
//       tax,
//       totalPrice,
//     };

//     sessionStorage.setItem("orderInfo", JSON.stringify(data));

//     history.push("/process/payment");
//   };

//   return (
//     <Fragment>
//       <MetaData title="Confirm Order" />
//       <CheckoutSteps activeStep={1} />
//       <div className="confirmOrderPage">
//         <div>
//           <div className="confirmshippingArea">
//             <Typography>Shipping Info</Typography>
//             <div className="confirmshippingAreaBox">
//               <div>
//                 <p>Name:</p>
//                 <span>{user.name}</span>
//               </div>
//               <div>
//                 <p>Phone:</p>
//                 <span>{shippingInfo.phoneNo}</span>
//               </div>
//               <div>
//                 <p>Address:</p>
//                 <span>{address}</span>
//               </div>
//             </div>
//           </div>
//           <div className="confirmCartItems">
//             <Typography>Your Cart Items:</Typography>
//             <div className="confirmCartItemsContainer">
//               {cartItems &&
//                 cartItems.map((item) => (
//                   <div key={item.product}>
//                     <img src={item.image} alt="Product" />
//                     <Link to={`/product/${item.product}`}>
//                       {item.name}
//                     </Link>{" "}
//                     <span>
//                       {item.quantity} X ₹{item.price} ={" "}
//                       <b>₹{item.price * item.quantity}</b>
//                     </span>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         {/*  */}
//         <div>
//           <div className="orderSummary">
//             <Typography>Order Summery</Typography>
//             <div>
//               <div>
//                 <p>Subtotal:</p>
//                 <span>₹{subtotal}</span>
//               </div>
//               <div>
//                 <p>Shipping Charges:</p>
//                 <span>₹{shippingCharges}</span>
//               </div>
//               <div>
//                 <p>GST:</p>
//                 <span>₹{tax}</span>
//               </div>
//             </div>

//             <div className="orderSummaryTotal">
//               <p>
//                 <b>Total:</b>
//               </p>
//               <span>₹{totalPrice}</span>
//             </div>

//             <button onClick={proceedToPayment}>Proceed To Payment</button>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default ConfirmOrder;

import React, { Fragment, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderAction";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const [paymentMethod, setPaymentMethod] = useState("COD"); // Default payment method

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;
  const dispatch = useDispatch();

  const proceedToPayment = () => {
    const orderData = {
      shippingInfo,
      orderItems: cartItems,
      itemsPrice: subtotal,
      taxPrice: tax,
      shippingPrice: shippingCharges,
      totalPrice: totalPrice,
      paymentInfo: {
        method: paymentMethod,
        status: paymentMethod === "COD" ? "COD" : "Pending",
      },
    };

    // Save orderInfo in sessionStorage for online payment
    sessionStorage.setItem("orderInfo", JSON.stringify(orderData));

    if (paymentMethod === "COD") {
      // Dispatch COD order
      dispatch(createOrder(orderData));
      history.push("/success"); // direct success page
    } else {
      history.push("/process/payment"); // Online payment
    }
  };

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>

          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div>
          <div className="orderSummary">
            <Typography>Order Summary</Typography>

            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            {/* Payment Method Selection */}
            <div className="paymentMethod">
              <Typography>Payment Method</Typography>
              <div>
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="COD"
                  checked={paymentMethod === "COD"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="cod">Cash On Delivery</label>

                <input
                  type="radio"
                  id="online"
                  name="paymentMethod"
                  value="Online"
                  checked={paymentMethod === "Online"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label htmlFor="online">Online Payment</label>
              </div>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
