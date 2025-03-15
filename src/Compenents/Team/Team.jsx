import React from "react";
import "./Team.css";

const teamMembers = [
  { name: "Kavintha Dinushan", role: "Team Leader and Project Manager", img: "static/ranindi.png" },
  { name: "Thulani Kalatuwawa", role: "FrontEnd Developer", img: "static/gayathmi.png" },
  { name: "Dulith Wanigarathne", role: "BackEnd Developer", img: "static/jose.png" },
  { name: "Isum Perera", role: "Machine Learning Engineer", img: "static/chaniya.png" },
  { name: "Mehara Wilfred", role: "Database Specialist", img: "static/ravinda.png" },
  { name: "Tilmi Premarathne", role: "UI/UX & Marketing", img: "static/minindu.png" }
];

const Team = () => {
  return (
    <section id="about">
      <h2 className="section-title">Our <span>Team</span></h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
