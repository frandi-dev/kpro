import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Layout from "./component/Layout";
import Rooms from "./page/Rooms";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* role admin saya */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Rooms />} />
      </Route>
    </Routes>
  );
}

export default App;
