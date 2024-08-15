import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/www.biotechpackages.com/images/search.png";
import logo from "../assets/www.biotechpackages.com/logo.png";
import blackarrow from "../assets/www.biotechpackages.com/images/blackarrow.png";
// import "./Search.css"; // Make sure to include your CSS file

// Product data

function Navbar({ componentName }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [linkColor, setLinkColor] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setLinkColor(componentName === "test" ? "red !important" : "white");
  }, [componentName]);

  const handleCall = () => {
    window.location.href = "tel:+923467133632";
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value) {
      const results = productData.filter(product =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <>
      <div className="main_headers">
        <div className="main_data">
          <div className="main_header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <div className="main_header_com">
                  <Link to="/">
                    <img
                      loading="lazy"
                      width="114"
                      height="85"
                      decoding="async"
                      className="logo"
                      src={logo}
                      alt="logo"
                      style={{ color: "transparent", width: "100%" }}
                    />
                  </Link>
                  <button
                    aria-controls="navbarScroll"
                    type="button"
                    aria-label="Toggle navigation"
                    className="navbar-toggler collapsed"
                    onClick={toggleSidebar}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navbar-collapse collapse" id="navbarScroll">
                    <div
                      className="m-auto my-2 my-lg-0 navbar-nav navbar-nav-scroll"
                      style={{ maxHeight: "100px" }}
                    >
                      <Link
                        className="non_active"
                        to="/Custom"
                        style={{ color: linkColor }}
                      >
                        Custom Packaging
                      </Link>
                      <Link
                        className="non_active"
                        to="/Sticker"
                        style={{ color: linkColor }}
                      >
                        Stickers &amp; Labels
                      </Link>
                      <Link
                        className="non_active"
                        to="/About"
                        style={{ color: linkColor }}
                      >
                        About
                      </Link>
                      <Link
                        className="non_active"
                        to="/Career"
                        style={{ color: linkColor }}
                      >
                        Careers
                      </Link>
                      <Link
                        className="non_active"
                        to="/Contacts"
                        style={{ color: linkColor }}
                      >
                        Contact
                      </Link>
                    </div>
                  </div>
                  <div className="search_fields">
                    {/* <div
                      className="search-container"
                      // onMouseEnter={() => setIsHovered(true)}
                      // onMouseLeave={() => setIsHovered(false)}
                    >
                      <div className="search_icon">
                        <img
                          alt="search"
                          loading="lazy"
                          width="30"
                          height="30"
                          decoding="async"
                          src={searchIcon}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      {isHovered && (
                        <div className="search-bar-container">
                          <input
                            type="text"
                            className="search-bar"
                            placeholder="Search your Product"
                            value={searchInput}
                            onChange={handleSearchChange}
                           
                          />
                          <img className="search-img" src={blackarrow} alt="" srcset="" />
                          {filteredProducts.length > 0 && (
                            <div className="search-results">
                              <ul>
                                {filteredProducts.map(product => (
                                  <li key={product.id}>
                                    <Link to={product.link}>
                                      {product.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div> */}

                    <Link to="https://api.whatsapp.com/send?phone=+923467133632&amp;text=Salam.">
                      <button
                        type="button"
                        className="call_us btn btn-primary"
                        onClick={handleCall}
                      >
                        Contact Us
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
