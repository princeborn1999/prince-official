import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skill } from "./components/Skill";
import { Experience } from "./components/Experience";
import { Interest } from "./components/Interest";
import { More } from "./components/More";
import { NotFound } from "./components/NotFound";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/more" element={<More />} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
