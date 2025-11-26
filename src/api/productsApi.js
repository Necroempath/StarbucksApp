import { useSelector, useDispatch } from "/react-redux";

const {items, status, error} = useSelector(state => state.products);
const dispatch = useDispatch();


// const { items, status } = useSelector(state => state.products);
// const dispatch = useDispatch();

// useEffect(() => {
//   if (status === "idle") {
//     dispatch(fetchProducts());
//   }
// }, [status, dispatch]);