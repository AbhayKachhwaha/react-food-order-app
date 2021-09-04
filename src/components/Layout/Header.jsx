import React from "react";
import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <div>React Meals</div>
        <HeaderCartButton />
      </header>
      <div className={styles[`main-image`]}>
        <img src={mealsImg} alt="Meals" />
      </div>
    </React.Fragment>
  );
};

export default Header;
