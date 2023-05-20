import React, { useState , useEffect } from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export function Experience() {
  const [click, setClick] = useState(' ')
  const handleDotClick = (dot) => {
    setClick(dot);
  };
  useEffect(()=>{
    setClick('systex')
  },[])
  return (
      <section aria-label="work-experience" className=' pl-5 pr-20 py-5 '>
        <div className="flex justify-center text-2xl">
          <h2 className="font-bold">Work Experience</h2>
        </div>
        <div className='flex'>
          <div className=''>
            <Timeline>
              <TimelineItem  onClick={() => handleDotClick('systex')}>
                <TimelineSeparator>
                  {click === 'systex' && <TimelineDot color='primary'/>}
                  {click !== 'systex' && <TimelineDot/>}
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Systex 2022.12 Front-end Engineer</TimelineContent>
              </TimelineItem>
              <TimelineItem onClick={() => handleDotClick('dragon')}>
                <TimelineSeparator >
                  {click === 'dragon' && <TimelineDot color='primary'/>}
                  {click !== 'dragon' && <TimelineDot/>}
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  DragonSoft 2022.9 Back-end Engineer
                </TimelineContent>
              </TimelineItem>
              <TimelineItem onClick={() => handleDotClick('into')}>
                <TimelineSeparator>
                  {click === 'into' && <TimelineDot color='primary' />}
                  {click !== 'into' && <TimelineDot />}
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>IntoStar 2022.5 Software Engineer</TimelineContent>
              </TimelineItem>
              <TimelineItem  onClick={() => handleDotClick('degree')}>
                <TimelineSeparator>
                  {click === 'degree' && <TimelineDot color='primary'/>}
                  {click !== 'degree' && <TimelineDot/>}
                </TimelineSeparator>
                <TimelineContent>Bachelor's degree in Computer Science 2022.1</TimelineContent>
              </TimelineItem>
            </Timeline>
          </div>
          <div className=''>
            {click === 'systex' && <Systex />}
            {click === 'dragon' && <DragonSoft />}
            {click === 'into' && <IntoStar />}
          </div>
        </div>
    </section>
  );
}
export function Systex(){
  return(
    <div className='p-5'>
        <a href="https://tw.systex.com/" className='font-bold text-lg'>SYSTEX</a>
        <div className='p-2'>
          <p>The largest Cloud Services Platform in Taiwan</p>
          <p>linked In: </p>
          <a href="https://www.linkedin.com/company/systex/" className='text-blue-500'>https://www.linkedin.com/company/systex/</a>
          <p>I work as a frontend developer at Systex, a company
              that specializes in creating software systems such
              as </p>
          <p> web applications and mobile systems primarily
              for financial institutions like banks and other
              organizations.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Angular</p>
          <p>Ngrx</p>
          <p>Git</p>
          <p>Jest</p>
        </div>
      </div>
  )
}
export function DragonSoft(){
  return(
    <div className='p-5'>
        <a href="https://www.dragonsoft.com/" className='font-bold text-lg'>DragonSoft</a>
        <div className='p-2'>
          <p>Cyber security company  in Taiwan</p>
          <p>website:</p>
          <a href="https://www.dragonsoft.com/" className='text-blue-500'>https://www.dragonsoft.com/</a>
          <p>I work at DragonSoft as a backend developer. Our primary focus is developing software solutions like GCB and Vans to </p>
          <p>various customers, including colleges, police institutions, and others. </p>
          <p>In my role, I collaborate closely with project managers and frontend developers to ensure smooth cooperation  </p>
          <p>throughout the development process.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>Node.js</p>
          <p>React.js</p>
          <p>Electron</p>
          <p>Cypress</p>
          <p>mongoDB</p>
        </div>
      </div>
  )
}
export function IntoStar(){
  return(
    <div className='p-5'>
        <a className='font-bold text-lg'>IntoStar</a>
        <div className='p-2'>
          <p>Web development company in Taiwan</p>
        <p>In IntoStar, my position as a full-stack developer primarily focuses on catering to government clients.</p>
        </div>
        <p className='font-bold text-lg'>Mainly skill:</p>
        <div className='text-lg p-2'>
          <p>ASP.NET MVC</p>
          <p>Ajax</p>
          <p>Jquery</p>
          <p>mySQL</p>
        </div>
      </div>
  )
}