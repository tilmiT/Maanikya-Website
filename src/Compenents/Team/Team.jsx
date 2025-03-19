import React from "react";
import "./Team.css";
import kavinthaImg from "../../assets/Team/Kavintha.jpg";
import thulaniImg from "../../assets/Team/Thulani.jpg";
import dulithImg from "../../assets/Team/Dulith.jpg";
import isumImg from "../../assets/Team/Isum.jpg";
import meharaImg from "../../assets/Team/Mehara.jpg";
import tilmiImg from "../../assets/Team/Tilmi.jpg";

const teamMembers = [
  { name: "Kavintha Dinushan", role: "Team Leader and Project Manager", img: kavinthaImg },
  { name: "Thulani Kalatuwawa", role: "FrontEnd Developer", img: thulaniImg },
  { name: "Dulith Wanigarathne", role: "BackEnd Developer", img: dulithImg },
  { name: "Isum Perera", role: "Machine Learning Engineer", img: isumImg },
  { name: "Mehara Wilfred", role: "Database Specialist", img: meharaImg },
  { name: "Tilmi Premarathne", role: "UI/UX & Marketing", img: tilmiImg }
];

const Team = () => {
  return (
    <section id="about">
      <h2 className="section-title">OUR TEAM</h2>
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