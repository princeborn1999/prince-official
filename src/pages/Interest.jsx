import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
export function Interest() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex justify-center px-20">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="Interest list">
              <Tab label="Body Builder" value="1" />
              <Tab label="Open Source" value="2" />
              <Tab label="Manga" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" className="flex justify-center">
            <section aria-label="body-tab">
            </section>
          </TabPanel>
          <TabPanel value="2" className="flex justify-center">
            <section aria-label="code-tab">
            </section>
          </TabPanel>
          <TabPanel value="3" className="flex justify-center">
            <section aria-label="manga-tab">
            </section>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}