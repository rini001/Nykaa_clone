import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromBag, getCartData, profile, userName } from "../../redux/action";
import { Cart } from "../cart/Cart";
import "./login.css";
import facebook from "./facebook.png";
import guest from "./guest.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
export const Login = () => {
  const [payment, setPayment] = useState(true);
  const handlePayment = () => {
    setPayment(true);
  };
  const handlePayment1 = () => {
    setPayment(false);
  };
  let price = 0;
  let discont = 0;
  let off_price = 0;
  const cartProducts = useSelector((state) => state.cartProducts);
  for (let item of cartProducts) {
    price += +item.price * +item.quan;
    discont += +item.price * +item.quan - +item.off_price * +item.quan;
    off_price += +item.off_price * +item.quan;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartData());
  }, []);
  

  const navigate = useNavigate();
  const checkOutItem = () => {
    for (let i = 0; i < cartProducts.length; i++) {
      axios
        .delete(
          `https://nykaa-db01.herokuapp.com/cartProducts/${cartProducts[i].id}`
        )
        .then((res) => dispatch(deleteFromBag(cartProducts[i].id)));
    }
    alert("Order Placed Successfully!!  Thank You for Ordering");
    navigate("/order");
  };
  const name=useSelector((state)=>state.uname)
  // console.log(name)
  // const [uname,setUname]=useState("")
  const [page, setPage] = useState(0);
  const [otpPin, setOtpPin] = useState("");
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [pop, setPop] = useState(true);
  const [otp, hasOtp] = useState(false);
  const [ot, setOt] = useState("");
  const handlePop = () => {
    setPop(!pop);
  };
  const handleShip = () => {
    setPage(2);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    fetch(`http://localhost:8000/login`, {
      method: "GET",
      headers: {
        "content-type": "application/json; charset=utf-8",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleLogin = () => {
    // data.forEach((elem) => {
    //   if (elem.phone === value) {
    //     // alert(`your otp is ${elem.otp}`);
    //     setOtpPin(elem.otp);
    //     hasOtp(!otp);
    //     console.log(1)
    //   }
    //   else{
    //     console.log(2)
    //   }
    // });
   
    let count=0
    for(const key in data){
      
      if (data[key].phone === value) {
        dispatch(userName(data[key].uname))
        dispatch(profile(data[key].image))
            // setUname(data[key].uname)
            alert(`your otp is ${data[key].otp}`);
            setOtpPin(data[key].otp);
            hasOtp(!otp);
            count++
          } 
    }
    if(count===0){
        alert("User is not registered, Please Login with registered mobile number...")
    }
  };
  const handleOTPchange = (e) => {
    setOt(e.target.value);
  };
  const verify = () => {
    if (otpPin === ot) {
      setPage(1);
      setPop(!pop);
    } else {
      alert("wrong OTP");
    }
  };
  return (
    <div>
      {/* NAVBAR */}
      {pop ? (
        <div>
          <div className="checkoutNav">
            <Link to="/">
              {" "}
              <div>
                <img
                  className="checkoutImg"
                  src="https://logos-download.com/wp-content/uploads/2021/01/Nykaa_Logo.png"
                  alt=""
                />
              </div>
            </Link>
            <div className="checks">
              <div className="checkDiv1">
                <h2>1 - LOGIN</h2>
              </div>
              <div className="checkDiv2">
                <h2>2 - ADDRESS</h2>
              </div>
              <div className="checkDiv3">
                <h2>3 - PAYMENT</h2>
              </div>
            </div>
          </div>
          {/* LOGIN/REGISTER */}

          <div className="checkSecondDiv">
            <div className="login1">Login/Register</div>

            {page === 0 ? (
              <div className="login2">
                <div className="loginDiv"> Login or Register</div>
                <p>Get Reward Points on new registration</p>
                <p>Redeem your Coupons & Reward Points</p>
                <img src={facebook} alt="" />
                <button className="enter" onClick={handlePop}>
                  ENTER PHONE NUMBER OR EMAIL
                </button>
                <img src={guest} alt="" />
              </div>
            ) : page === 1 ? (
              <div className="address1">
                <div>
                  <div className="edit">Edit Address</div>
                  <form action="" className="formclass">
                    <input type="text" name="County" placeholder="country" />
                    <br />
                    <input type="text" name="name" placeholder="name" />
                    <br />
                    <input type="email" name="Email" placeholder="Email" />
                    <br />
                    <input type="number" name="number" placeholder="Number" />
                    <br />
                    <input type="number" name="pin" placeholder="Postal Code" />
                    <br />
                    <div className="addrsBox">
                      <input type="text" name="address" placeholder="Address" />
                    </div>
                  </form>
                  <div>
                    <button className="ship" onClick={handleShip}>
                      SHIP TO THIS ADDRESS ᐳ
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h4>CHOOSE PAYMENT METHOD</h4>
                <div className="payDiv1">
                  <div className="payDiv2">
                    <div>Preferred Payment Methods</div>
                    <div>Credit/Debit Card</div>
                    <div onClick={handlePayment}>UPI</div>
                    <div>GooglePay</div>
                    <div>Net Banking</div>
                    <div>Mobile Wallets</div>
                    <div onClick={handlePayment1}>Cash on Delivery</div>
                    <div>Gift Card</div>
                  </div>
                  <div className="payDiv3">
                    {payment ? (
                      <div>
                        <div>UPI PAYMENT</div>
                        <button onClick={checkOutItem}>PAY BY UPI</button>
                      </div>
                    ) : (
                      <div>
                        <div>CASH ON DELIVERY</div>
                        <button onClick={checkOutItem}>Pay ₹ by cash</button>
                      </div>
                    )}
                  </div>
                  <div className="payDiv4">
                    <div className="total_price">
                      <div>Payment Details</div>
                      <div>
                        <p>
                          <span>Bag Total</span>
                          <span>₹{price}</span>
                        </p>
                        <p>
                          <span>Bag Discount</span>
                          <span>-₹{discont}</span>
                        </p>
                        <p>
                          <span>Sub Total</span>
                          <span>₹{off_price}</span>
                        </p>
                        <p>
                          <span>Shipping Charge</span>
                          <span>🛈 Free</span>
                        </p>
                        <h3>
                          <span>Grand Total</span>
                          <span>₹{off_price}</span>
                        </h3>
                      </div>
                      <div>
                        <input type="text" placeholder="Have a coupon?" />
                        <button>Views Coupon</button>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {page === 0 || page === 1 ? (
              <div className="card">
                <Cart />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div className="modal0">
          <div className="modal">
            <div className="modal2">
              <div className="cross" onClick={handlePop}>
                x
              </div>
              <div className="heading">
                <h4>LOGIN / REGISTER</h4>
              </div>
            </div>
            <div className="inpAndproceed">
              <div className="inp">
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="enter your number"
                />
              </div>
              {otp === false ? (
                <div>
                  <button className="proceed" onClick={handleLogin}>
                    PROCEED
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {otp ? (
              <div className="otpDiv">
                <div>
                  Welcome back {name}, Please enter the OTP sent on your phone (Be
                  sure to check your spam folder)
                </div>
                <div>
                  <input
                    type="text"
                    value={ot}
                    onChange={handleOTPchange}
                    placeholder="enter your PIN"
                  />
                </div>
                <button className="verify" onClick={verify}>
                  VERIFY
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </div>
  );
};
