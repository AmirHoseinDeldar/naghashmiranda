import "./Services.css";
import { services } from "../../sources";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section id="services">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">سرویس ها</span>
          </h1>
          <h4 className="sub-title muted">
            با ما اوج بگیرید ما شاهکار هنری می سازیم لحظه هایی از لذت بردن زندگی
            پر از خلاقیت زینت بخشیدن به احساسات خود به احساس خود سبک جدیدی می
            بخشید صنایع دستی لوکس ، مد روز کنجکاوی خود را طراحی کنید صنایع دستی
            خوب برای روابط خوب
          </h4>
        </div>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service" key={index}>
              <div className="flex-center icon-wrapper">{service.icon}</div>
              <div className="details">
                <h3 className="name gradient-text">{service.name}</h3>
                <p className="muted">{service.description}</p>
              </div>
              <div className="flex buttons-wrapper">
                <button className="btn">بیشتر بدانید</button>
                <Link to="contact" smooth={true} className="btn">
                  شروع!
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
