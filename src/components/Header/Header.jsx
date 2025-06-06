
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import  { useRef, useState } from "react";


// ... Rest of your code ...


const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  // {
  //   path: "/td",
  //   display: "Dash",
  // },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/services",
    display: "Services",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  
  // {
  //   path: "/profile",
  //   display: "profile",
  // },
  // {
  //   path: "/dash",
  //   display: "Dash",
  // },
  
  
  
];

const Header = () => {
  const menuRef = useRef(null);
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);


  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  const toggleRegisterOptions = () => {
    setShowRegisterOptions((prevState) => !prevState);
  };


  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
              <div className="logohasc">
                <span>
                  <a href="/">< i class="ri-tools-line"></i> Home</a>
                </span>
              </div>
                <span>Need Help?</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +044-638-2914
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/login" className=" d-flex align-items-center gap-1">
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                {/* <Link to="/register" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> user Register
                </Link>
                <Link to="/tech" className=" d-flex align-items-center gap-1">
                  <i class="ri-user-line"></i> Technician Register
                </Link> */}
                
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {/* ... Your existing navigation links ... */}
                <div className="nav__item nav__register">
                  <span onClick={toggleRegisterOptions}>Register</span>
                  {showRegisterOptions && (
                    <div className="register__options">
                      <Link to="/register" className=" d-flex align-items-center gap-1">
                          <i class="ri-user-line"></i> user
                      </Link>
                      <Link to="/tech" className=" d-flex align-items-center gap-1">
                          <i class="ri-user-line"></i> Technician
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    
                    <i class="ri-tools-line"></i>
                    <span>
                      Home Appliances <br/>Service Center
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Trichy</h4>
                  <h6>Rock Fort City, Tamil Nadu</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
