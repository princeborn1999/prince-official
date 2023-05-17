import React from "react";
import Video from "../../components/Video";
import Profile from "./Profile";
export function Home() {
  return (
    <div className="grid grid-cols-10">
      <section id="section-right" className="col-span-8 p-5 pl-10">
        <div className="text-3xl text-white p-2 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 shadow-md">
          <div className="flex justify-center p-5">
            <p>If you don't make changes now,</p>
            <p>when will you make them?</p>
          </div>
          <Video />
          <div className="flex justify-center p-5">
            <p>Success emerges from the lessons of failure</p>
          </div>
        </div>
      </section>
      <section id="section-left" className="col-span-2">
        <Profile />
      </section>
    </div>
  );
}
