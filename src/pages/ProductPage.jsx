import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Order from "../components/Order";

const ProductPage = () => {
  const { items, status } = useSelector((state) => state.products);
  const {productId} = useParams();
  const product = items.find((product) => product.id == productId);
  console.log(product)
  return <Order product={product} />;
};

export default ProductPage;
