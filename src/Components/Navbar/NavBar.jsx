import React from "react";
import { useProducts } from "../Providers/ProductsProvider";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const products = useProducts();
  const totalItems = products.filter((p) => p.quantity > 0).length;
  return (
    <header className={styles.navBar}>
      <h2>Total items in the shopping cart:</h2>
      <span>{totalItems}</span>
    </header>
  );
};
export default NavBar;
