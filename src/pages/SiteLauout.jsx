import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const SiteLauout = () => {
  return (
    <>
      <Header className={'px-6 md:px-8 lg:px-10'}/>
      <main className="container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default SiteLauout;
