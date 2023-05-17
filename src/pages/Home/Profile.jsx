import React from "react";
import ProfilePicture from "../../assets/img/profile-picture2.jpg";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { SiAngular, SiReact, SiNodedotjs } from "react-icons/si";
import { RxEnvelopeClosed } from "react-icons/rx";
function Profile() {
  return (
    <div className="bg-gradient-to-r p-10 border">
      <img
        className="rounded-full"
        src={ProfilePicture}
        alt="portfolio_picture"
      />
      <h2 className="font-bold">Name</h2>
      <p>Aaron Huang (Aaron Prince)</p>
      <h2 className="font-bold">Title</h2>
      <p>Front-end Developer</p>
      <h2 className="font-bold">Bachelor's Degree</h2>
      <p>Computer Science at NCNU (2017-2022)</p>
      <div>
        <h2 className="font-bold">Skill</h2>
        <div className="flex">
          <SiAngular size="50" />
          Angular
        </div>
        <div className="flex">
          <SiReact size="50" />
          React
        </div>
        <div className="flex">
          <SiNodedotjs size="50" />
          Node
        </div>
      </div>

      <div aria-label="Link">
        <h2 className="font-bold">Link</h2>
        <div className="flex">
          <a href="https://github.com/princeborn1999">
            <DiGithubBadge size="50" />
            Github
          </a>
        </div>
        <div className="flex">
          <a href="https://github.com/princeborn1999">
            <FaLinkedin size="50" />
            LinkedIn
          </a>
        </div>
        <div className="flex">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQhMXbyd7-IKtyViojFdgtrzkBx4ZXlUnC_AIxJQDghBH8tmBa8hWD-AhNLJ9V67-Jj6ty48dyaySlk/pub">
            <RxEnvelopeClosed size="50" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
export default Profile;
