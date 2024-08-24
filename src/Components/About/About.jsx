import "./About.css";
import { whyChooseMe } from "../../sources";

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">درباره ما</span>
          </h1>
          <h4 className="sub-title muted">
            یک نقاشی منحصر به فرد باید بیننده اش را درگیر خود کرده و درون او
            احساسی را دچار تغییر و تحول گرداند. یک نقاش خوب نقاشی است که وقتی
            نقاشی اش را می کشد و به مخاطبش نشان می دهد، حس مخاطب از وقتی نقاشی
            را ندیده بود تا وقتی که آن را دید تغییر نماید.
          </h4>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index) => (
            <div className="flex-center group-item" key={index}>
              <div className="flex-center icon-wrapper">{list.icon}</div>
              <h4 className="title">{list.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
