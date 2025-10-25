import { Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import AdminLayout from "./component/AdminLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* role kasir /  resepsionis / dapur */}
      <Route path="/staff">
        <Route index element={<h1>Staff</h1>} />
      </Route>
      {/* role admin saya */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<h1>Admin</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
