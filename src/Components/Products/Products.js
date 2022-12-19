// import "./product.css";
import styles from "./product.module.css";
import { FaRegTrashAlt } from "react-icons/fa";

const Products = ({
  product,
  onChangeInput,
  onIncrement,
  onDecrement,
  onDelete,
  ...props
}) => {
  return (
    <div className={styles.product}>
      <p>this is a products : {product.title} course</p>
      <p>price is : {product.price}</p>
      {product.children}
      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        type="text"
        className={styles.input}
        placeholder="Product Name"
        onChange={onChangeInput}
        value={product.title}
      ></input> */}

      <button
        className={`${styles.button} ${styles.inc}`}
        onClick={onIncrement}
      >
        +
      </button>
      <button
        className={`${styles.button} ${styles.inc} ${
          product.quantity === 1 && styles.remove
        }`}
        onClick={onDecrement}
      >
        {product.quantity === 1 ? <FaRegTrashAlt /> : "-"}
      </button>
      <button className={styles.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
export default Products;
