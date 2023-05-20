import React, { useState } from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export function Project(){
    const [dotColor, setDotColor] = useState()
    const handleDotClick = () => {
      setDotColor(dotColor === 'primary' ? null : 'primary');
    };
    return(
        <section aria-label="side-project">
        <div className="flex justify-center p-5 text-2xl">
          <h2 className="font-bold">Side Project</h2>
        </div>
        <div className='flex'>
        <Timeline>
          <TimelineItem onClick={() => handleDotClick('mrt')}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Taipei MRT UIUX design 初選 Behance
            </TimelineContent>
          </TimelineItem>
          <TimelineItem onClick={() => handleDotClick('unity')}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2020 Unity Skill ? git hub link</TimelineContent>
          </TimelineItem>
          <TimelineItem onClick={() => handleDotClick('arduino')}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2019 Arduino Skill ? git hub link</TimelineContent>
          </TimelineItem>
          <TimelineItem onClick={() => handleDotClick('verilog')}>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>2018 Verilog 可愛ICON</TimelineContent>
          </TimelineItem>
        </Timeline>
        <div>
          
        </div>
        </div>
      </section>
    )
}