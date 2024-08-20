import { Link } from "react-scroll";
import "./Hero.css";
import me from "../../assets/me.png";
import Achievement from "../../Commons/Achievement/Achievement";

const Hero = () => {
  return (
    <section id="hero">
      <div className="wrapper info-container">
        <div className="column hero-image">
          <img src={me} alt="" />
        </div>
        <div className="column">
          <h3 className="sub-title">
            سلام من <span className="primary">میراندا هستم</span>
          </h3>
          <h1 className="heading-1">
            نقاش <span className="gradient-text"> رنگ روغن پرتره</span> و سیاه
            قلم
          </h1>
          <p className="muted Rubik">
            در این بخش جملات و متن های زیبا در مورد هنر نقاشی و نقاشی کردن را
            برای کپشن و استوری گردآوری کرده ایم.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to="services" smooth={true} className="btn primary Rubik">
              بیشتر بدانید
            </Link>
            <Link to="services" smooth={true} className="btn primary Rubik">
              شروع همکاری
            </Link>
          </div>
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  );
};

export default Hero;
