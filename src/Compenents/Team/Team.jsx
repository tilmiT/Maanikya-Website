import React from "react";
import "./Team.css";

const teamMembers = [
  { name: "Kavintha Dinushan", role: "Team Leader and Project Manager", img: "src/assets/Team/Kavintha.jpg" },
  { name: "Thulani Kalatuwawa", role: "FrontEnd Developer", img: "src/assets/Team/Thulani.jpg" },
  { name: "Dulith Wanigarathne", role: "BackEnd Developer", img: "src/assets/Team/Dulith.jpg" },
  { name: "Isum Perera", role: "Machine Learning Engineer", img: "src/assets/Team/Isum.jpg" },
  { name: "Mehara Wilfred", role: "Database Specialist", img: "src/assets/Team/Mehara.jpg" },
  { name: "Tilmi Premarathne", role: "UI/UX & Marketing", img: "src/assets/Team/Tilmi.jpg" }
];

const Team = () => {
  return (
    <section id="about">
      {/* <h2 className="section-title">OUR TEAM</h2> */}
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;