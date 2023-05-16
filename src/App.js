import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; 
import rootReducer from './reducers';
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Interest } from "./pages/Interest";
import { More } from "./pages/More";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { Skill } from "./pages/Skill";

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
      <div className="h-screen">
        <Router>
          <Header></Header>
          <main className="p-5">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/interest" element={<Interest />} />
              <Route path="/more" element={<More />} />
              <Route component={NotFound} />
            </Routes>
          </main>
          <Footer></Footer>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
