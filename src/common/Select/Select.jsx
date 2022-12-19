import Select from "react-select";
import styles from "./select.module.css";
const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContainer}>
      <span>{title}</span>
      <Select {...rest} className={styles.Select} />
    </div>
  );
};

export default SelectComponent;
