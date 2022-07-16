import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/login";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
