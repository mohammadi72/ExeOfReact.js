import { useProductsActions } from "../Providers/ProductsProvider";
import { useState } from "react";
import styles from "./filter.module.css";
import SelectComponent from "../../common/Select/Select";
import SearchBar from "../../common/search/Search";
const filterOptions = [
  { value: "", label: "ALL" },
  { value: "XS", label: "XS" },
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "X", label: "X" },
  { value: "XL", label: "XL" },
  { value: "XXL", label: "XXL" },
];
const sortOptions = [
  { value: "highest", label: "up to down" },
  { value: "lowest", label: "down to up" },
];
const Filter = () => {
  const dispatch = useProductsActions();
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");

  const filterHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    dispatch({ type: "sort", selectedOption: sort });

    setFilter(selectedOption);
  };
  const sortHandler = (selectedOption) => {
    dispatch({ type: "sort", selectedOption });
    setSort(selectedOption);
  };
  return (
    <section>
      <SearchBar filter={filter} />
      <div className={styles.filter}>
        <SelectComponent
          value={filter}
          onChange={filterHandler}
          options={filterOptions}
          title={"order by:"}
        />
        <SelectComponent
          value={sort}
          onChange={sortHandler}
          options={sortOptions}
          title={"sort by:"}
        />
      </div>
    </section>
  );
};

export default Filter;
