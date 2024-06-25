import { useState } from "react";
import "./navbar.scss";
import {
  FaSearch,
  FaShoppingBag,
  FaArrowUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar(activeLi) {
  const [toggleMenu, setToggleMenu] = useState(false);

  function openCloseMenu() {
    const navbarMenu = document.querySelector(".nav_menu");
    const background = document.querySelector(".background");
    const navMenu = document.querySelector(".navbar_menu");
    if (!toggleMenu) {
      if (navbarMenu.classList.contains("closeNav")) {
        navbarMenu.classList.remove("closeNav");
        navbarMenu.style.left = "0";
      } else if ((navbarMenu.style.left = "100%")) {
        navbarMenu.style.left = "0";
      }
      if (!background.classList.contains("openBackground")) {
        background.classList.add("openBackground");
      }
      if (!navMenu.classList.contains("openNavmenu")) {
        navMenu.classList.add("openNavmenu");
      }
      if (background.classList.contains("openBackground")) {
        background.classList.remove("closeBackground");
      }
      if (navMenu.classList.contains("openNavmenu")) {
        navMenu.classList.remove("closeNavmenu");
      }
      setToggleMenu(true);
      console.log(toggleMenu);
    } else {
      if (!background.classList.contains("closeBackground")) {
        background.classList.add("closeBackground");
      }
      if (background.classList.contains("openBackground")) {
        background.classList.remove("openBackground");
      }
      if (!navMenu.classList.contains("closeNavmenu")) {
        navMenu.classList.add("closeNavmenu");
      }
      if (navMenu.classList.contains("openNavmenu")) {
        navMenu.classList.remove("openNavmenu");
      }
      if (!navbarMenu.classList.contains("closeNav")) {
        navbarMenu.classList.add("closeNav");
        navbarMenu.style.left = '100%';
      }
      setToggleMenu(false);
      console.log(toggleMenu);
    }
  }

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <a href="" className={activeLi == "home" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="">Pages</a>
          </li>
          <li>
            <a href="">services</a>
          </li>
          <li>
            <a href="">portfolio</a>
          </li>
          <li>
            <a href="">blog</a>
          </li>
          <li>
            <a href="">contact us</a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25%"
          height="60%"
          viewBox="0 0 371.92 135.52"
        >
          <title>logo</title>
          <path
            d="M40,135.52c13.66-.39,29.49-3.07,35.83-12.63,12.13-18.3,4.25-34.8-9.21-49.44,10.61,18.09,9.14,31.43,7.07,38.18a4.59,4.59,0,0,1-5.77,3,4.05,4.05,0,0,1-.83-.35c-17.19-9.31-28.78-19.94-26-42.76S40.47,41.06,39.92,40H7.22A7.22,7.22,0,0,0,0,47.21H0V87.88a7.23,7.23,0,0,0,7.22,7.23H40Z"
            fill="#171f4c"
          ></path>
          <path
            d="M95.08,40V7.23A7.23,7.23,0,0,0,87.85,0H47.22A7.23,7.23,0,0,0,40,7.23V39.85c2,.37,39.18,7.37,55.27,37.37a42.32,42.32,0,0,1,5,17.89h27.59a7.23,7.23,0,0,0,7.23-7.23V47.22A7.23,7.23,0,0,0,127.85,40Z"
            fill="#3368c6"
          ></path>
          <path
            d="M150,98.48l20.56-31.12.08,1.36L151.72,40.08h12.64L177,59.69h1.68l12.54-19.61h12.16L184.26,69l-.16-1.36,21,30.88H192.6L177.88,76.56h-1.66l-14.1,21.92Z"
            fill="#171f4c"
          ></path>
          <path
            d="M228,100a22.94,22.94,0,0,1-9.8-1.92A20.29,20.29,0,0,1,211.36,93a21.8,21.8,0,0,1-4.12-7.2,25.17,25.17,0,0,1-1.36-8.16V76.08a25.55,25.55,0,0,1,1.4-8.44,20.89,20.89,0,0,1,4.2-7.2,20.4,20.4,0,0,1,6.92-5,24.89,24.89,0,0,1,19.72.32,18.12,18.12,0,0,1,7.16,6.12,17.71,17.71,0,0,1,3,9.12h-10.8a8.74,8.74,0,0,0-2.84-5.6A9.47,9.47,0,0,0,228,63.16a10.17,10.17,0,0,0-6.12,1.76,10.37,10.37,0,0,0-3.62,4.77,19.42,19.42,0,0,0-1.2,7.08,19.9,19.9,0,0,0,1.16,7,10.2,10.2,0,0,0,3.6,4.88,10.51,10.51,0,0,0,6.28,1.76,11.06,11.06,0,0,0,5-1,8.63,8.63,0,0,0,3.32-2.88,9.63,9.63,0,0,0,1.56-4.16h10.8a17.67,17.67,0,0,1-3.08,9.24,19,19,0,0,1-7.28,6.2A22.81,22.81,0,0,1,228,100Z"
            fill="#171f4c"
          ></path>
          <path
            d="M267.88,99.6a19.19,19.19,0,0,1-8.28-1.68,12.79,12.79,0,0,1-5.52-4.8,13.81,13.81,0,0,1-2-7.52,12.36,12.36,0,0,1,2.36-7.84,14,14,0,0,1,6.64-4.56,29.77,29.77,0,0,1,10-1.52h10.14v6.64H271a8.31,8.31,0,0,0-5.88,1.88,6.27,6.27,0,0,0-2,4.84,6.18,6.18,0,0,0,2,4.8A8.55,8.55,0,0,0,271,91.68a10.65,10.65,0,0,0,4.28-.84A7.33,7.33,0,0,0,278.56,88,11.18,11.18,0,0,0,280,82.4l2.72,3.12a18.63,18.63,0,0,1-2.2,7.68,12.13,12.13,0,0,1-5,4.76A16.71,16.71,0,0,1,267.88,99.6Zm14-1.12V85.6H280V71.28c0-2.51-.61-4.37-1.84-5.6s-3.12-1.84-5.68-1.84c-1.34,0-2.94,0-4.8.08s-3.75.12-5.64.2-3.59.17-5.08.28V55c1.22-.11,2.61-.22,4.16-.32s3.13-.18,4.76-.2,3.16,0,4.6,0a30.29,30.29,0,0,1,11.16,1.76,13.27,13.27,0,0,1,6.72,5.52,18.75,18.75,0,0,1,2.28,9.84v27Z"
            fill="#171f4c"
          ></path>
          <path
            d="M300.6,98.48V55h8.8v18.4h-.24q0-9.36,4-14.16t11.76-4.8h1.6v9.68h-3q-5.61,0-8.68,3c-2.06,2-3.08,4.89-3.08,8.68V98.48Z"
            fill="#171f4c"
          ></path>
          <path
            d="M351.08,100a23.39,23.39,0,0,1-9.8-1.92,19.72,19.72,0,0,1-7-5.16,22.55,22.55,0,0,1-4.16-7.24,24.39,24.39,0,0,1-1.4-8.16V76a25,25,0,0,1,1.4-8.36,21.37,21.37,0,0,1,4.16-7.2,20,20,0,0,1,6.84-5,22.2,22.2,0,0,1,9.44-1.88,21.22,21.22,0,0,1,11.8,3.08,19.55,19.55,0,0,1,7.16,8.08,24.44,24.44,0,0,1,2.4,10.76v4H333.48V72.69H365l-3.44,3.36a19,19,0,0,0-1.2-7.12,9.5,9.5,0,0,0-3.64-4.56,12.47,12.47,0,0,0-12.36.08,10.36,10.36,0,0,0-3.88,4.84,19.54,19.54,0,0,0-1.32,7.56,19.27,19.27,0,0,0,1.28,7.24,10.73,10.73,0,0,0,3.92,5,11.65,11.65,0,0,0,6.72,1.8,12.17,12.17,0,0,0,6.64-1.64,7.33,7.33,0,0,0,3.28-4h10.22a18.47,18.47,0,0,1-3.68,7.84,18.1,18.1,0,0,1-6.92,5.2A23.79,23.79,0,0,1,351.08,100Z"
            fill="#171f4c"
          ></path>
        </svg>
        <div className="rightNav">
          <div className="icons">
            <div className="icon">
              <FaSearch />
            </div>
            <div className="icon">
              <FaShoppingBag />
              <span className="cart_count">0</span>
            </div>
            <div className="menu" onClick={openCloseMenu}>
              <FaBars />
            </div>
          </div>
          <button>
            <span>Make An Appointment</span>
            <i className="arrow">
              <FaArrowUp />
            </i>
          </button>
        </div>
      </nav>
      <div className="nav_menu">
        <div className="background"></div>
        <div className="navbar_menu">
          <div className="closeIcon">
            <FaTimes onClick={openCloseMenu} />
          </div>
          <div className="navItems"></div>
        </div>
      </div>
    </div>
  );
}
