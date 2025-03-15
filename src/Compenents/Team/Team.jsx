import React from "react";
import "./Team.css";

const teamMembers = [
  { name: "Kavintha Dinushan", role: "Team Lead", img: "static/ranindi.png" },
  { name: "Thulani Kalatuwawa", role: "Marketing Lead", img: "static/gayathmi.png" },
  { name: "Dulith Wanigarathne", role: "Implementation Lead", img: "static/jose.png" },
  { name: "Isum Perera", role: "Documentation Lead", img: "static/chaniya.png" },
  { name: "Mehara Wilfred", role: "Operations Lead", img: "static/ravinda.png" },
  { name: "Tilmi Premarathne", role: "UI/UX Lead", img: "static/minindu.png" }
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
