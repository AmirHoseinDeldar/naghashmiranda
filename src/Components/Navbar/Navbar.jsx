import "./Navbar.css";
import { tabs } from "../../sources";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <navbar className="navbar flex">
      <div className="box flex-center tabs-group sidebar">
        {tabs.map((tab, index) => (
          <Link
            to={tab.id}
            smooth={true}
            spy={true}
            className="tab"
            activeClass="active"
            key={index}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <div className="box flex-center buttons">
        <Link to="contact" smooth={true} className="btn primary contact-btn">
          درخواست کار!
        </Link>
        <Link to="services" smooth={true} className="btn services-btn">
          سرویس ها
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
