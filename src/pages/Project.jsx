import React, { useState, useEffect } from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import mrt1 from "../assets/img/mrt1.jpg";
import mrt2 from "../assets/img/mrt2.jpg";
import mrt3 from "../assets/img/mrt3.jpg";

export function Project(){
  const [click, setClick] = useState(' ')
  const handleDotClick = (dot) => {
    setClick(dot);
  };
  useEffect(()=>{
    setClick('mrt')
  },[])
  return(
    <section aria-label="side-project">
      <div className="flex justify-center p-5 text-2xl">
        <h2 className="font-bold">Side Project</h2>
      </div>
      <div className='flex justify-center'>
        <div className=''>
          <Timeline>
            <TimelineItem onClick={() => handleDotClick('mrt')}>
              <TimelineSeparator>
                {click === 'mrt' && <TimelineDot color='primary'/>}
                {click !== 'mrt' && <TimelineDot/>}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                Taipei MRT UIUX🚋
              </TimelineContent>
            </TimelineItem>
            <TimelineItem onClick={() => handleDotClick('unity')}>
              <TimelineSeparator>
                {click === 'unity' && <TimelineDot color='primary'/>}
                {click !== 'unity' && <TimelineDot/>}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>2020 Unity🌎</TimelineContent>
            </TimelineItem>
            <TimelineItem onClick={() => handleDotClick('arduino')}>
              <TimelineSeparator>
                {click === 'arduino' && <TimelineDot color='primary'/>}
                {click !== 'arduino' && <TimelineDot/>}
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>2019 Arduino🦿</TimelineContent>
            </TimelineItem>
            <TimelineItem onClick={() => handleDotClick('verilog')}>
              <TimelineSeparator>
                {click === 'verilog' && <TimelineDot color='primary'/>}
                {click !== 'verilog' && <TimelineDot/>}
              </TimelineSeparator>
              <TimelineContent>2018 Verilog 🤖</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className=''>
          {click === 'mrt' && <Mrt />}
          {click === 'unity' && <Unity />}
          {click === 'arduino' && <Arduino />}
          {click === 'verilog' && <Verilog />}
        </div>
      </div>
    </section>
  )
}
export function Mrt(){
  return(
    <div className='p-5'>
        <div aria-label="img" className='flex'>
          <img className='h-72 m-2' src={mrt1} alt="" />
          <img className='h-72 m-2' src={mrt2} alt="" />
          <img className='h-72 m-2' src={mrt3} alt="" />
        </div>
        <a className='font-bold text-lg'>MRT🚋</a>
        <div className='p-2'>
          <p>Competition for UI/UX Design in the 2023 Taiwan Taipei MRT</p>
          <p>news:</p>
          <a href="https://2023hackathon.metro.taipei/#news" className='text-blue-500'>https://2023hackathon.metro.taipei/#news</a>
        </div>
        <p className='font-bold text-lg'>description:</p>
        <div className='p-2'>
          <p>In this project, I collaborated with my co-worker Shelly and took on the responsibility of UI/UX design.</p>
          <p>Our main focus was enhancing the creativity and user-friendliness of the original Taipei MRT mobile app.</p>
          <p>Together, we put in considerable effort to deliver an improved user experience.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Figma</p>
        </div>
      </div>
  )
}
export function Unity(){
  return(
    <div className='p-5'>
        <img src="" alt="" />
        <a className='font-bold text-lg'>Unity</a>
        <div className='p-2'>
          <p>A virtual city of Tokyo</p>
          <p>Document:</p>
          <a href="https://docs.google.com/document/d/e/2PACX-1vS1-oBcy8-Vj38XMEOehISuCIEZsCtarSAORzHwz-ZWxBb-XM8Yd8FohX60DXhCZGzwQt0PdNBQXM63/pub" className='text-blue-500'>https://docs.google.com/document/d/e/2PACX....</a>
        </div>
        <p className='font-bold text-lg'>description:</p>
        <div className='p-2'>
          <p>The project created during the peak of the COVID-19 outbreak. Our team's objective</p>
          <p>was to display crucial information, such as the number of confirmed cases, within </p> 
          <p>the virtual world of Tokyo. This initiative aimed to provide people with essential </p> 
          <p>updates without requiring them to venture outside. </p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Unity</p>
          <p>Blender</p>
          <p>Python</p>
        </div>
      </div>
  )
}
export function Arduino(){
  return(
    <div className='p-5'>
        <img src="" alt="" />
        <a className='font-bold text-lg'>Arduino</a>
        <div className='p-2'>
          <p>A real-time Arduino device designed to detect weather conditions and play corresponding music tracks</p>
          <p>github:</p>
          <a href="https://github.com/princeborn1999/RealtimeMusicMaker" className='text-blue-500'>https://github.com/princeborn1999/RealtimeMusicMaker</a>
        </div>
        <p className='font-bold text-lg'>description:</p>
        <div>
          <p>This project aims to provide users with real-time weather information without the need to step outside.</p> 
          <p>By detecting weather parameters using Arduino and playing different music tracks through Sonic Pi,</p>
          <p>we aim to create an experience that effectively communicates the current weather conditions to the users.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Arduino</p>
          <p>Sonic Pi</p>
          <p>Python</p>
          <p>C</p>
        </div>
      </div>
  )
}
export function Verilog(){
  return(
    <div className='p-5'>
        <img src="" alt="" />
        <a className='font-bold text-lg'>Verilog</a>
        <div className='p-2'>
          <p>A Tetris game implemented using Verilog</p>
        </div>
        <p className='font-bold text-lg'>description:</p>
        <div className='p-2'>
          <p>This project is a Tetris game developed as part of my college coursework.</p>
          <p> Verilog was utilized to create the game's implementation.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Verilog</p>
        </div>
      </div>
  )
}