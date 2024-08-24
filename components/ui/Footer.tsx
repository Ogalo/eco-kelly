// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#ff7b24] text-white py-10 w-full">
      <div className="container mt-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Eco Safaris</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Why Discover Kenya</a></li>
            <li><a href="#" className="hover:underline">Terms & conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Travel Tips</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Island Tours</a></li>
            <li><a href="#" className="hover:underline">Adventures</a></li>
            <li><a href="#" className="hover:underline">Shows</a></li>
            <li><a href="#" className="hover:underline">Fishing</a></li>
            <li><a href="#" className="hover:underline">Diving Tips</a></li>
            <li><a href="#" className="hover:underline">City Tour</a></li>
          </ul>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <address className="not-italic">
            GXC5+99J, Kitengela<br />
            E: kellynecosafaris@outlook.com<br />
            P: +254 725141999
          </address>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
