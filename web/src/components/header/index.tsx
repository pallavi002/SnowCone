import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import the useLocation hook

const navigation = [
  { name: "Products", href: "/products" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Stories", href: "/stories" },
  { name: "Log Out", href: "/logout" },

];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerStyle, setHeaderStyle] = useState({
    background: "transparent",
    color: "white",
  });

  

  // Get the current location pathname using useLocation
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    }
  }, [navigate]);

  useEffect(() => {
    // Function to update the header style based on scroll position and path
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const currentPath = location.pathname;

      if (scrollY > 0 || currentPath !== "/") {
        // Scrolled down or not on the homepage, change the header style
        setHeaderStyle({ background: "#93BDCB", color: "white" });
      } else {
        // At the top on the homepage, reset to the default style
        setHeaderStyle({ background: "transparent", color: "white" });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    if (location.pathname !== "/") {
      handleScroll();
    }
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header
      style={headerStyle}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="text-xl ml-10 font-bold font-serif sm:text-3xl">
              SnowCone
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
