import { Routes, Route } from "react-router-dom";

import Homepage from "./Component/Home";
import RoomPage from "./Component/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
  );
}

export default App;
