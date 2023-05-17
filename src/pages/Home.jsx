import React, { useEffect, useRef } from 'react';
import ProfilePicture from "../assets/img/profile-picture2.jpg";
import Video from '../components/Video';
export function Home() {

  return (
    <div className="grid grid-cols-10">
      <section id="section-right" className="col-span-8 p-5 pl-10">
        <div className="text-3xl text-white p-5 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
          <p>If you don't make changes now,</p>
          <p>when will you make them?</p>
          <Video />
        </div>
      </section>
      <section id="section-left" className="col-span-2">
        <div className="bg-gradient-to-r p-10 border">
          <img
            className="rounded-full"
            src={ProfilePicture}
            alt="portfolio_picture"
          />
          <p>This is Aaron Prince!</p>
          <p>Born in 1999</p>
          <p>2022 Graduated at NCNU</p>
          <p>Computer Scientist Degree</p>
          <p>Skill: React</p>
          <p> Angular </p>
          <p>Node</p>
          <p>
            <a href="https://github.com/princeborn1999">Github</a>
          </p>
          <p>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQhMXbyd7-IKtyViojFdgtrzkBx4ZXlUnC_AIxJQDghBH8tmBa8hWD-AhNLJ9V67-Jj6ty48dyaySlk/pub">
              CV
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
