import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { Home } from "./pages/Home/Home";
import { Experience } from "./pages/Experience";
import { Interest } from "./pages/Interest";
import { More } from "./pages/More";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { Backend } from "./pages/Backend";
import { Project } from "./pages/Project";
const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return (
    <Provider store={store}>
        <Router basename='/prince-official/'>
          <div className="h-screen flex flex-col">
            <Header></Header>
            <main className="mb-auto">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/project" element={<Project />} />
                <Route path="/interest" element={<Interest />} />
                <Route path="/more" element={<More />} />
                <Route path="/backend" element={<Backend />} />
                <Route component={NotFound} />
              </Routes>
            </main>
            <Footer></Footer>
          </div>
      </Router>
    </Provider>
  );
}

export default App;
