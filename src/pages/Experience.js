import React, { useState } from 'react';
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export function Experience() {
  const [dotColor, setDotColor] = useState()
  const handleDotClick = () => {
    setDotColor(dotColor === 'primary' ? null : 'primary');
  };
  return (
    <div>
      <section aria-label="work-experience">
        <div className="flex justify-center text-2xl">
          <h2 className="font-bold">Work Experience</h2>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              {dotColor && <TimelineDot color={dotColor} onClick={handleDotClick}/>}
              {!dotColor && <TimelineDot onClick={handleDotClick}/>}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Systex 2022.12 Front-end Engineer</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              {dotColor && <TimelineDot color={dotColor} onClick={handleDotClick}/>}
              {!dotColor && <TimelineDot onClick={handleDotClick}/>}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              DragonSoft 2022.9 Back-end Engineer
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              {dotColor && <TimelineDot color={dotColor} onClick={handleDotClick}/>}
              {!dotColor && <TimelineDot onClick={handleDotClick}/>}
            </TimelineSeparator>
            <TimelineContent>IntoStar 2022.5 Software Engineer</TimelineContent>
          </TimelineItem>
        </Timeline>
        {/* <p>2017.7~2022.1 Graduated at NCNU</p>
        <p>2022.4~2022.6 IntoStar as Software Engineer </p>
        {/* hover會出現技能 */}
        <p>2022.8~2022.11 DragonSoft as Backend Engineer</p>
        <p>2022.12~Current Systex放url as Frontend Engineer</p>
      </section>
      <section aria-label="side-project">
        <div className="flex justify-center text-2xl">
          <h2 className="font-bold">Side Project</h2>
        </div>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              Taipei MRT UIUX design 初選 Behance
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2020 Unity Skill ? git hub link</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>2019 Arduino Skill ? git hub link</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>2018 Verilog ?</TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
    </div>
  );
}
