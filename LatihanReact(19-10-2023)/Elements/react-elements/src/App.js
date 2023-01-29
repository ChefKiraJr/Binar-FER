import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CompleteTable from "./pages/CompleteTable";
import EmployeePage from "./pages/EmployeePage";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/employee-table" element={<CompleteTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
