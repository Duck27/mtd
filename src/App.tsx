import { HashRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/res" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
