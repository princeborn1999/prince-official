import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export function More() {
  return (
    <div className="flex justify-center">
      <div className="p-5">
        <div className="flex justify-center p-5">
          <h1 className="font-bold text-2xl">Q & A</h1>
        </div>
        <Accordion className="m-2 p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>Could you kindly introduce yourself?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">
              "Hello everyone, my name is Aaron and I work as a front-end
              engineer with over a year of experience in software development. I
              primarily work with the Angular framework. I'm also actively
              seeking side project opportunities. If any of you have any
              interesting projects in mind, please feel free to connect with me.
              I'm excited to collaborate with all of you!"
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="m-2 p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>In which field are you involved?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">
              "Besides web application development, I've spent a significant
              amount of time working on various side projects such as Verilog,
              Arduino, VR, Unity, Blender, Sonic Pi, Blockchain, and Machine
              Learning. During my studies, I have learned programming languages
              such as C#, C, C++, Python, JavaScript, and MATLAB."
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="m-2 p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>
              What path you pursue next to achieve your future goals?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">
              I am interested in exploring international opportunities and
              collaborating with engineers from diverse backgrounds.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="m-2 p-2">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>How can I get in touch with you?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-gray-600">
              "You can reach me via email at princeborn1999@gmail.com or connect
              with me on LinkedIn at
              https://www.linkedin.com/in/aaron-prince-4b9475230/. If you have
              any questions or thoughts, please feel free to contact me."
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
