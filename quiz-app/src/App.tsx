import { Routes, Route } from "react-router-dom";
import { Category, Home } from "./pages";
import Exam from "./pages/Exam";

const App = () => {
  return (
    <div className="w-full min-h-screen text-slate-900 bg-cool-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/exam/:examId" element={<Exam />} />
      </Routes>
    </div>
  );
};

export default App;
