import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Layout from "./component/Layout";
import Rooms from "./page/Rooms";
import Users from "./page/Users";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* role admin saya */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Rooms />} />
        <Route path="users" element={<Users />} />
        <Route path="fnb" element={<h1>fnb</h1>} />
        <Route path="reports" element={<h1>reports</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
