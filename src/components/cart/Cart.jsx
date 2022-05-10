import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteFromBag,  updateQuan } from "../../redux/action";
const Div = styled.div`
  display: block;
  width: 97%;
  z-index: 10;
  height: 10rem;
  background-color: white;
  margin: 1rem 0.7rem;
  padding-top: 0.6rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  .card_div1 {
    width: 100%;
    display: flex;
    & > div:nth-child(1) {
      width: 30%;
      background-color: white;
      & > img {
        width: 80%;
      }
    }
    & > div:nth-child(2) {
      width: 60%;
    }
    & > div:nth-child(3) {
      width: 10%;
      background-color: white;
      & > img {
        width: 60%;
      }
    }
  }
  .card_div2 {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 10;
    & select {
      border: none;
      font-size: 17px;
      option {
        border: none;
        font-size: 18px;
      }
    }
    & select:avtive {
      border: none;
    }
    & select option:disabled {
      display: none;
    }
  }
`;
export const Cart = () => {

  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);
  const dispatch = useDispatch();
  const changeQuantity = (val, id) => {
    axios
      .patch(`http://localhost:8000/cartProducts/${id}`, {
        quan: val,
      })
      .then((res) => dispatch(updateQuan({ val, id })));
  };
  const deleteItem = (id) => {
    axios
        .delete(`https://nykaa-db01.herokuapp.com/cartProducts/${id}`)
        .then((res) => dispatch(deleteFromBag(id)));
};
  return (
    <div>
      <>
        {cartProducts.map((el) => (
          <Div key={el.id}>
            <div className="card_div1">
              <div>
                <img src={el.image1} alt="" />
              </div>
              <div>{el.card_title}</div>
              <div>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-128.png"
                  alt="delete"
                  onClick={() => deleteItem(el.id)}
                />
              </div>
            </div>
            <hr />
            <div className="card_div2">
              <div>
                Quantity:
                <select
                  name="quan"
                  onChange={(e) => changeQuantity(e.target.value, el.id)}
                >
                  <option
                    style={{
                      backgroundColor: "rgb(252, 39, 121)",
                    }}
                  >
                    {+el.quan}
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>+<option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div>
                <span
                  style={{
                    textDecoration: "line-through",
                    marginRight: "0.5rem",
                  }}
                >
                  ₹{+el.price * +el.quan}
                </span>
                <span>₹{+(el.price-el.off_price )* +el.quan}</span>
              </div>
            </div>
          </Div>
        ))}
      </>
    </div>
  );
};
