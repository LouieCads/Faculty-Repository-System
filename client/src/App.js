import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./pages/Home.js";
import Upload from "./pages/Upload.js";
import View from './pages/View.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
          <Link to="/">Home </Link>
          <Link to="uploadThesis">Upload </Link>
          <Link to="viewThesis">See All </Link>
        </div>
        <Routes>
          <Route path="/viewThesis" element={<View />}/>
          <Route path="/uploadThesis" element={<Upload />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
