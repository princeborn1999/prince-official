import React, { useState } from "react";
import angularImg from '../../assets/img/icons8-angular-48.png'
import reactImg from '../../assets/img/icons8-react-100.png'
import profileImg from '../../assets/img/profile-picture.jpg'
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
export function Home() {
  const [value, setValue] = useState("1");
  const [ activeTab, setActiveTab] = useState('tab1')
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="py-5 px-10 flex justify-center items-center h-96">
      <div>
        <div className="flex mt-32">
          <img className="h-56" src={profileImg} alt="" />
          <div aria-label="text" className="px-2">
            <div className="flex items-center space-x-2 p-2">
              <p className="text-3xl font-bold">Hi I'm Aaron</p>
              <p className="text-2xl">, a</p>
              <p className="underline text-3xl">Front-end developer</p>
              <p className="text-2xl">passionate about software development.👍</p>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <p className="text-2xl ">With 1 year of experience in</p>
              <img class="h-16" src={angularImg} alt="" />
              <p className="text-3xl underline"> Angular </p>
              <p className="text-2xl "> and </p>
              <img class="h-16" src={reactImg} alt="" />
              <p className="text-3xl underline">React.</p>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <p className="text-2xl">
                This website showcases a collection of my work💪, including side project in College.🏫
              </p>
            </div>
            <div className="flex items-center space-x-2 p-2">
              <p className="text-2xl">
                If you have any questions🙋‍♂️, collaboration🤝, please feel
              </p>
              <p className="text-3xl font-bold">free</p>
              <p className="text-2xl">
                to contact with me.👋
              </p>
            </div>
          </div>
        </div>
        <div aria-label='connect' className="py-5">
          <div className="flex m-2">
            <ImLinkedin size='24' className="mr-1"/>
            <a href="https://www.linkedin.com/in/aaron-prince-4b9475230/" >https://www.linkedin.com/in/aaron-prince-4b9475230/</a>
          </div>
          <div className="flex m-2">
            <FaGithub size='24'className="mr-1"/>
            <a href="https://github.com/princeborn1999">https://github.com/princeborn1999</a>
          </div>
        </div>
      </div>
    </div>
  );
}
