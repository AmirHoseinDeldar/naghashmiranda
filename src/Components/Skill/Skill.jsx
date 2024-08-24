import { skills } from "../../sources";
import "./Skill.css";
import SkillCard from "./SkillCard/SkillCard";

const Skill = () => {
  return (
    <section id="skill">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">توانایی های من</span>
          </h1>
        </div>
        <div className="skills-container">
          {skills.map((list, index) => (
            <SkillCard {...list} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
