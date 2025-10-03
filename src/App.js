import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoPage from "./Pages/TodoPage";
import ContactPage from "./Pages/ContactPage";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Todo" element={<TodoPage />} />
        <Route path="/Contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
