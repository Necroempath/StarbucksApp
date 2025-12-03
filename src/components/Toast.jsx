import { useEffect } from "react";

const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="
      fixed top-6 left-1/2 -translate-x-1/2
      bg-green-600 text-white
      px-6 py-3 rounded-xl shadow-lg
      text-lg font-semibold
      animate-toast
      z-50
    ">
      {message}
    </div>
  );
};

export default Toast;
