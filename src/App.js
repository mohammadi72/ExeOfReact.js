import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import ProductsList from "./Components/Products/ProductsList";
import Wrapper from "./hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Filter from "./Components/Filter/Filter";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter />
        <ProductsList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
