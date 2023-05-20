import React, { useState } from 'react';
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
  return (
    <div>
      <section aria-label="work-experience">
        <div className="flex justify-center p-5 text-2xl">
          <h2 className="font-bold">Work Experience</h2>
        </div>
        <div className='flex'>
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
      </section>
    </div>
  );
}
