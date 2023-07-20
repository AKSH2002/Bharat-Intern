import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import Header from './Component/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />

          {/* Use Routes instead of Switch */}
          <Routes>
            <Route path="/about" element={<Navbar />} />
            <Route path="/users" element={<Navbar />} />
            <Route path="/" element={<Header />} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
