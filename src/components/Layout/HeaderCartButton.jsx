import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
// import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  // const cartCtx = useContext(CartContext);

  // const { items } = cartCtx;

  // const numberOfCartItems = items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

  return (
    <React.Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{/* {numberOfCartItems} */}3</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
