import { contactOptions } from "../../sources";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="Contact">
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div className="flex-center option" key={index}>
              <div className="flex-center icon-wrapper ">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="muted">{option.value}</h3>
            </div>
          ))}
        </div>
        <div className="contact-form">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text"> زود به ما ملحق شو!</span>
            </h1>
            <p className="muted">
              من با صبر و حوصله خیلی زیاد نقاشی میکنم چون خیلی دوس دارم کارمو
            </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input
                type="text"
                placeholder="اسم"
                name="firstname"
                className="control"
              />{" "}
              <input
                type="text"
                placeholder="فامیلی"
                name="LastName"
                className="control"
              />
            </div>
            <div className="flex row">
              <input
                type="email"
                placeholder="ایمیل"
                name="email"
                className="control"
              />{" "}
              <input
                type="tel"
                placeholder="+98"
                name="tel"
                className="control"
              />
            </div>
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="پیام زیباتون!"
              className="control"
            ></textarea>
          </div>
          <div className="bottom flex-center">
            <button className="btn primary">ارسال کنید!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
