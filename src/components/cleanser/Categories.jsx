import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "../../redux/action";
import "./Categories.css";
import { Toggle, Toggle2 } from "./Toggle";
export const Categories = () => {
  return (
    <Toggle>
      <div>
        <div className="first">
          <label htmlFor="Straighteners">Relevance</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">Discount</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">Name</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">Customer Top Rated</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">New Arrivals</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">Price : High to Low</label>
          <input type="checkbox" />
        </div>
        <div className="first">
          <label htmlFor="Straighteners">Price : Low to High</label>
          <input type="checkbox" />
        </div>
      </div>
    </Toggle>
  );
};
export const Categories2 = () => {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const filterfunc = () => {
    let option = document.getElementsByName("category");
    let filterStatus = false;
    var arr = [];
    for (var checkbox of option) {
      if (checkbox.checked) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].brand_name === checkbox.value) {
            arr.unshift(data[i]);
            // console.log(arr)
          }
        }
        filterStatus = true;
      }
    }

    if (!filterStatus) {
      dispatch(filterData(data));
    } else {
      dispatch(filterData(arr));
    }
  };
  return (
    <div className="forMargin">
      <div onChange={filterfunc}>
        <Toggle2 name="brand">
          <div>
            <div className="first">
              <label htmlFor="Straighteners">Ponds</label>
              <input type="checkbox" name="category" value="Ponds" />
            </div>
            <div className="first">
              <label htmlFor="Straighteners">Cetaphil</label>
              <input type="checkbox" name="category" value="Cetaphil" />
            </div>
            <div className="first">
              <label htmlFor="Straighteners">Keihl's</label>
              <input type="checkbox" name="category" value="Kiehls" />
            </div>
            <div className="first">
              <label htmlFor="Straighteners">Clinique</label>
              <input type="checkbox" name="category" value="Clinique" />
            </div>
            <div className="first">
              <label htmlFor="Straighteners">Lakme</label>
              <input type="checkbox" name="category" value="Lakme" />
            </div>
          </div>
        </Toggle2>
      </div>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
      <Toggle2>
        <div>
          <div className="first">
            <label htmlFor="Straighteners">Relevance</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Discount</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Name</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Customer Top Rated</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">New Arrivals</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : High to Low</label>
            <input type="checkbox" />
          </div>
          <div className="first">
            <label htmlFor="Straighteners">Price : Low to High</label>
            <input type="checkbox" />
          </div>
        </div>
      </Toggle2>
    </div>
  );
};
