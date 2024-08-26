import "./Footer.css";
import Logo from "../../Commons/Logo/Logo";
import SocialHandles from "../../Commons/SocialHandles/SocialHandles";
import { footer } from "../../sources";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="column">
          <Logo />
          <SocialHandles />
        </div>
        {footer.map((list, index) => (
          <div className="column" key={index}>
            <h3 className="muted title">{list.title}</h3>
            {list.routes.map((route, i) => (
              <Link
                to={route.id || ""}
                smooth={true}
                className="route"
                key={index}
              >
                {route.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="copyright">
        <h4>copyright &copy; All Right Reserved 2024 - 1403</h4>
        <p className="muted">
          Khili Doseton Daram Mersi ke ta Inja Video Kenaram Bodi ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
