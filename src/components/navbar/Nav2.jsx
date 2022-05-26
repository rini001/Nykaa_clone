import React, { useContext, useState } from "react";
import styles from "./Nav2.module.css";
import { NykaaFashion } from "./NykaaFashion";
import { SearchData } from "../../Data/SearchData";
import { Link } from "react-router-dom";
import { Contexts } from "../../contexts/Contexts";
import { useSelector } from "react-redux";
import { BeautyAdvice } from "./BeautyAdvice";
export const Nav2 = () => {
  const [filterData, setFilterdata] = useState([]);
  const handleFilter = (e) => {
    const searchWord = e.target.value;
    const newFilter = SearchData.filter((val) => {
      return val.product_name.includes(searchWord);
    });
    setFilterdata(newFilter);
  };
  const name=useSelector((state)=>state.uname)
  const profile=useSelector((state)=>state.profile)

  const handleLogout=()=>{
    // console.log(name)
    alert("name")
  }
  const cartProducts = useSelector((state) => state.cartProducts);
  

  const { handleshowBag } = useContext(Contexts);
  return (
    <div>
      {/*  Main Navbar Div */}
      <div className={styles.nav}>
        {/* Nykaa Icon */}
        <Link to="/">
          <div>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png"
              alt="nykaa"
              style={{
                height: "100px",
                width: "100%",
                display: "block",
                marginTop: "-20px",
              }}
            />
          </div>
        </Link>

        {/* Dropdown/No Dropdown Nav Links */}
        <Link style={{textDecoration:"none"}} to="/cleanser"><div className={styles.noDrop}>Categories</div></Link>
        <div className={styles.dropdown}>
          <div className={styles.dropbtn}>Brands</div>
          <div className={styles.dropdownContent}>
            <NykaaFashion />
          </div>
        </div>
        <div className={styles.dropdown}>
          <div className={styles.dropbtn}>Nykaa Fashion</div>
          <div className={styles.dropdownContent}>
            <NykaaFashion />
          </div>
        </div>
        <div className={styles.dropdown}>
          <div className={styles.dropbtn}>Beauty Advice</div>
          <div className={styles.dropdownContent}>
            <BeautyAdvice />
          </div>
        </div>
        <div className={styles.noDrop}>Nykaa Network</div>

        {/* Search Bar */}
        <div className={styles.search}>
          <div
            className={styles.searchDiv}
            style={{
              float: "left",
              marginTop: "10px",
              padding: "0.6%",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0  0 24 24"
              opacity="48%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z"
                fill="black"
              ></path>
            </svg>
            <path
              d="M21.54 19.97L16.3 14.73C17.36 13.44 17.99 11.79 17.99 9.99C17.99 5.85 14.64 2.5 10.5 2.5C6.35 2.5 3 5.85 3 9.99C3 14.13 6.35 17.48 10.49 17.48C12.29 17.48 13.94 16.84 15.23 15.79L20.47 21.03C20.62 21.18 20.81 21.25 21 21.25C21.19 21.25 21.38 21.18 21.53 21.03C21.83 20.74 21.83 20.26 21.54 19.97ZM10.49 15.98C7.19 15.98 4.5 13.29 4.5 9.99C4.5 6.69 7.19 4 10.49 4C13.79 4 16.48 6.69 16.48 9.99C16.48 13.3 13.8 15.98 10.49 15.98Z"
              fill="black"
            ></path>
            <i
              className="fa fa-light fa-magnifying-glass"
              style={{ fontSize: "20px", opacity: "48", fill: "grey" }}
            ></i>
            <input
              type="text"
              placeholder="Search on Nykaa"
              onChange={handleFilter}
              style={{
                border: "none",
                width: "150px",
                outline: "none",
                background: "transparent",
              }}
            />
          </div>
          {filterData.length !== 0 && (
            <div className={styles.searchItems}>
              {filterData.map((el) => (
                <Link to={el.path}>
                  <h4>{el.product_name}</h4>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Account Icon */}
        <div style={{ display: "flex" }}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.9 21.5001C19.2866 21.5001 19.6 21.1867 19.6 20.8001C19.6 20.4135 19.2866 20.1001 18.9 20.1001C18.5134 20.1001 18.2 20.4135 18.2 20.8001C18.2 21.1867 18.5134 21.5001 18.9 21.5001Z"
              fill="#001325"
              fill-opacity="0.92"
            ></path>
            <path
              d="M15.9 21.5001C16.2866 21.5001 16.6 21.1867 16.6 20.8001C16.6 20.4135 16.2866 20.1001 15.9 20.1001C15.5134 20.1001 15.2 20.4135 15.2 20.8001C15.2 21.1867 15.5134 21.5001 15.9 21.5001Z"
              fill="#001325"
              fill-opacity="0.92"
            ></path>
            <path
              d="M12.9 21.5001C13.2866 21.5001 13.6 21.1867 13.6 20.8001C13.6 20.4135 13.2866 20.1001 12.9 20.1001C12.5134 20.1001 12.2 20.4135 12.2 20.8001C12.2 21.1867 12.5134 21.5001 12.9 21.5001Z"
              fill="#001325"
              fill-opacity="0.92"
            ></path>
            <path
              d="M12 4C12.7 4 13.3 4.2 13.8 4.7C14.3 5.2 14.5 5.9 14.5 6.6V6.7C14.5 7.4 14.3 8.2 13.8 8.7C12.8 9.7 11.2 9.7 10.2 8.7C9.69998 8.2 9.39998 7.5 9.39998 6.8V6.7C9.29998 5.3 10.3 4.1 11.7 4C11.8 4 11.9 4 12 4ZM12 2.5C9.79998 2.5 7.99998 4.3 7.99998 6.5C7.99998 6.6 7.99998 6.6 7.99998 6.7V6.8C7.89998 9 9.59998 10.9 11.8 11C11.9 11 11.9 11 12 11C13.1 11 14.1 10.6 14.9 9.8C15.7 9 16.1 7.9 16 6.8V6.6C16 5.5 15.6 4.4 14.8 3.6C14.1 2.9 13 2.5 12 2.5Z"
              fill="#001325"
              fill-opacity="0.92"
            ></path>
            <path
              d="M9.79999 21.5002H5.79999C5.39999 21.5002 4.99999 21.3002 4.69999 21.0002C4.39999 20.7002 4.29999 20.2002 4.39999 19.8002C4.99999 15.4002 8.99999 12.4002 13.4 13.0002C16.2 13.4002 18.6 15.2002 19.7 17.8002C19.8 18.2002 19.6 18.6002 19.2 18.8002C18.8 18.9002 18.4 18.8002 18.3 18.4002C17 15.1002 13.2 13.4002 9.89999 14.7002C7.69999 15.6002 6.09999 17.6002 5.79999 20.0002H9.79999C10.2 20.0002 10.6 20.3002 10.6 20.8002C10.6 21.3002 10.2 21.5002 9.79999 21.5002Z"
              fill="#001325"
              fill-opacity="0.92"
            ></path>
          </svg>
          {/* <img src={profile} alt="" height="30px" width="30px" style={{borderRadius:"50%"}} /> */}
          <span style={{pointer:"cursor"}} onClick={handleLogout} className={styles.acc}>{name}</span>
        </div>

        {/* Bag Icon*/}
        <div className={styles.btn} onClick={handleshowBag}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 7.2H16.2V6.9C16.3 4.5 14.4 2.5 12 2.5C9.6 2.6 7.8 4.5 7.8 6.9V7.2H3.5C2.9 7.2 2.5 7.6 2.5 8.2V16.4C2.5 19.2 4.7 21.4 7.5 21.4H16.5C19.3 21.4 21.5 19.2 21.5 16.4V8.2C21.5 7.7 21.1 7.2 20.5 7.2ZM9.3 6.9C9.3 5.4 10.5 4.1 12 4C13.5 4.1 14.7 5.4 14.7 6.9V7.2H9.3V6.9ZM20 16.5C20 18.4 18.4 20 16.5 20H7.5C5.6 20 4 18.4 4 16.5V8.7H7.8V10.7C7.6 10.9 7.5 11.2 7.5 11.4C7.5 12 8 12.4 8.5 12.4C9 12.4 9.5 11.9 9.5 11.4C9.5 11.1 9.4 10.9 9.2 10.7V8.7H14.6V10.6C14.4 10.8 14.3 11.1 14.3 11.4C14.3 12 14.7 12.5 15.3 12.5C15.9 12.5 16.4 12.1 16.4 11.5C16.4 11.2 16.3 11 16.1 10.8V8.8H20V16.5Z"
              fill="black"
            ></path>
          </svg>
          <span className={styles.cartCount}>{cartProducts.length}</span>
        </div>
      </div>
    </div>
  );
};
