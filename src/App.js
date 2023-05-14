import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skill } from "./pages/Skill";
import { Experience } from "./pages/Experience";
import { Interest } from "./pages/Interest";
import { More } from "./pages/More";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="h-screen">
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
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
