import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export function Interest() {
  return (
    <Tabs>
      <Tab label="Body Builder"></Tab>
      <Tab label="Open Source"></Tab>
      <Tab label="Manga">
        <div>Manga</div>
      </Tab>
    </Tabs>
  );
}
