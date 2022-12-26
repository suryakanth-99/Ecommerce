import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/product-slice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Home</h1>
      <ul>
        {products.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Home;
