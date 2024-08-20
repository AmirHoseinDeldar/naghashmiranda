import React, { useEffect, useState } from "react";
import "./Achievement.css";
import Odometer from "react-odometerjs";

const Achievement = () => {
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setClients(329);
      setProjects(7);
      setExperience(1.2);
    });
  });
  return (
    <div className="achievement-container">
      <div className="card">
        <div className="flex-center">
          <Odometer value={experience} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">سال ها تجربه</p>
      </div>
      <div className="card">
        <div className="flex-center">
          <Odometer value={clients} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">مشتری های سراسر جهان</p>
      </div>
      <div className="card">
        <div className="flex-center">
          <Odometer value={projects} className="title" />
          <h1 className="title">+</h1>
        </div>
        <p className="muted name">پروژه های کامل شده</p>
      </div>
    </div>
  );
};

export default Achievement;
