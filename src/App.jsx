import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* role kasir /  resepsionis / dapur */}
      <Route></Route>
      {/* role admin saya */}
      <Route path="admin"></Route>
    </Routes>
  );
}

export default App;
