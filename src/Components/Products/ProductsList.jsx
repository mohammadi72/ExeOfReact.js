import React, { Fragment } from "react";
import { useProducts, useProductsActions } from "../Providers/ProductsProvider";
import Products from "./Products";

const ProductsList = (props) => {
  const products = useProducts();
  const dispatch = useProductsActions();

  const renderProduct = () => {
    if (products.length === 0) return <div>there is no product in card</div>;
    return (
      <Fragment>
        {products.map((product) => {
          return (
            <Products
              // name={product.title}
              // price={product.price}
              product={product}
              key={product.id}
              onDelete={() => dispatch({ type: "remove", id: product.id })}
              onIncrement={() =>
                dispatch({ type: "increment", id: product.id })
              }
              onDecrement={() =>
                dispatch({ type: "decrement", id: product.id })
              }
              onChangeInput={(e) =>
                dispatch({ type: "edit", id: product.id, event: e })
              }
            />
          );
        })}
      </Fragment>
    );
  };
  return <Fragment>{renderProduct()}</Fragment>;
};

export default ProductsList;
