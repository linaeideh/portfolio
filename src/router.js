import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";

const AppRouter = () => { 
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/" element={<About />} />
        
         
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter; // تصدير المكون