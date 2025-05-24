import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import HrLayout from './layouts/HrLayout/HrLayout';
import EmpoloyeeLayout from './layouts/EmployeeLayout/EmployeeLayout';
import MainLayout from './layouts/MainLayout/MainLayout';
import Home from './layouts/MainLayout/Home';
import About from './layouts/MainLayout/About';
import Login from './layouts/MainLayout/Login';
import Register from './layouts/MainLayout/Register';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />         
          <Route path="/register" element={<Register />} />          
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
        </Route>
         {/* Empoloyee Layout */}
         <Route path="/employee" element={<EmpoloyeeLayout />}> 
         </Route>
          {/* Hr Layout */}
          <Route path="/hr" element={<HrLayout />}>
         </Route>

      </Routes>
    </Router>
  );
}

export default App;
