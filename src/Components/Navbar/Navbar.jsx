import "./Navbar.css";
import { tabs } from "../../sources";
import { Link } from "react-scroll";
import Logo from "../../Commons/Logo/Logo";
import SocialHandles from "../../Commons/SocialHandles/SocialHandles";

import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <navbar className="navbar flex">
      {openSidebar ? (
        <div className="overlay" onClick={() => setOpenSidebar(!openSidebar)} />
      ) : (
        ""
      )}

      <div className="box flex-center button ">
        <div
          className="flex-center icon-wrapper menu-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <HiMenu />
        </div>
        <Link to="contact" smooth={true} className="btn primary contact-btn">
          درخواست کار!
        </Link>
        <Link to="services" smooth={true} className="btn services-btn">
          سرویس ها
        </Link>
      </div>

      <SocialHandles />

      <div
        className={`box flex-center tabs-group sidebar ${
          openSidebar ? "visible" : ""
        }`}
      >
        {tabs.map((tab, index) => (
          <Link
            to={tab.id}
            smooth={true}
            spy={true}
            className="tab"
            activeClass="active"
            key={index}
            onClick={() => setOpenSidebar(false)}
          >
            {tab.name}
          </Link>
        ))}

        <div
          className="flex-center icon-wrapper cancel-btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaTimes />
        </div>
      </div>

      <Logo />
    </navbar>
  );
};

export default Navbar;
