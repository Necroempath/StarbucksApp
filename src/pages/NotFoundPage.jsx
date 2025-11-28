import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center mt-10">
      <div className="text-3xl text-gray-400 mb-5">
        Page not found
      </div>
      <Link to={'/'} className="text-green-600 hover:underline">Back to home</Link>
    </div>
  );
};

export default NotFoundPage;
