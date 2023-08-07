import { Routes, Route } from "react-router-dom";
import AboutUs from "./Component/About";

import Homepage from "./Component/Home";
import RoomPage from "./Component/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
      <Route path="/about" element={<AboutUs />} /> {/* Add the AboutUs route */}
    </Routes>
  );
}

export default App;
