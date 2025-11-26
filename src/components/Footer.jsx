import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { SiYoutubemusic } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

        <div>
          <h3 className="font-bold text-gray-900 mb-4 uppercase">About Us</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Our Company</li>
            <li className="hover:text-gray-900 cursor-pointer">Our Coffee</li>
            <li className="hover:text-gray-900 cursor-pointer">Stories</li>
            <li className="hover:text-gray-900 cursor-pointer">Customer Safety</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 uppercase">Careers</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Culture</li>
            <li className="hover:text-gray-900 cursor-pointer">Diversity</li>
            <li className="hover:text-gray-900 cursor-pointer">College Plan</li>
            <li className="hover:text-gray-900 cursor-pointer">Apply</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 uppercase">Social Impact</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">People</li>
            <li className="hover:text-gray-900 cursor-pointer">Planet</li>
            <li className="hover:text-gray-900 cursor-pointer">Sourcing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 uppercase">For Business</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Coffee Solutions</li>
            <li className="hover:text-gray-900 cursor-pointer">Licensed Stores</li>
            <li className="hover:text-gray-900 cursor-pointer">Suppliers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 mb-4 uppercase">Customer Service</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Order Status</li>
            <li className="hover:text-gray-900 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-900 cursor-pointer">Gift Cards</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link><FaSpotify className="text-3xl"/></Link>
            <Link><FaFacebook className="text-3xl" /></Link>
            <Link><FaPinterest className="text-3xl" /></Link>
            <Link><BsTelegram className="text-3xl" /></Link>
            <Link><SiYoutubemusic className="text-3xl" /></Link>
            <Link><FaBitcoin className="text-3xl" /></Link>
          </div>


        </div>
         <div className="max-w-7xl mx-auto px-6 py-10">

        <ul className="flex flex-col md:flex-row md:flex-wrap gap-3 md:gap-4 text-sm">
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Privacy Notice
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Consumer Health Privacy Notice
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Terms of Use
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Do Not Sell or Share My Personal Information
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              CA Supply Chain Act
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Accessibility
            </span>
          </li>
          <li>
            <span className="cursor-pointer text-gray-600 hover:text-gray-900 hover:underline transition">
              Cookie Preferences
            </span>
          </li>
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


export default Footer