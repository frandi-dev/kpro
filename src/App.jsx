import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Layout from "./component/Layout";
import Rooms from "./page/Rooms";
import Spash from "./page/Spash";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Spash />} />
      <Route path="/login" element={<Login />} />
      {/* role admin saya */}
      <Route path="/admin" element={<Layout />}>
        <Route index element={<Rooms />} />
      </Route>
    </Routes>
  );
}

export default App;
