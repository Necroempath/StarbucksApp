import { FaSpotify, FaFacebook, FaPinterest, FaBitcoin } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  const sections = [
    {
      title: "About Us",
      items: ["Our Company", "Our Coffee", "Stories", "Customer Safety"],
    },
    {
      title: "Careers",
      items: ["Culture", "Diversity", "College Plan", "Apply"],
    },
    {
      title: "Social Impact",
      items: ["People", "Planet", "Sourcing"],
    },
    {
      title: "For Business",
      items: ["Coffee Solutions", "Licensed Stores", "Suppliers"],
    },
    {
      title: "Customer Service",
      items: ["Contact Us", "Order Status", "Delivery", "Gift Cards"],
    },
  ];

  const footerLinks = [
    "Privacy Notice",
    "Consumer Health Privacy Notice",
    "Terms of Use",
    "Do Not Sell or Share My Personal Information",
    "CA Supply Chain Act",
    "Accessibility",
    "Cookie Preferences",
  ];

  const socialIcons = [
    { icon: <FaSpotify className="text-3xl" /> },
    { icon: <FaFacebook className="text-3xl" /> },
    { icon: <FaPinterest className="text-3xl" /> },
    { icon: <BsTelegram className="text-3xl" /> },
    { icon: <SiYoutubemusic className="text-3xl" /> },
    { icon: <FaBitcoin className="text-3xl" /> },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {sections.map(({ title, items }) => (
          <div key={title}>
            <h3 className="font-bold text-gray-900 mb-4 uppercase">{title}</h3>
            <ul className="space-y-2 text-gray-600">
              {items.map((item) => (
                <li key={item} className="hover:text-gray-900 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialIcons.map(({ icon }, i) => (
              <Link key={i}>{icon}</Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-10">

          <ul className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 text-sm">
            {footerLinks.map((text) => (
              <li key={text}>
                <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              © 2025 Starbucks Coffee Company. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
