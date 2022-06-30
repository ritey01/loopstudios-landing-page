import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Careers from "./components/Pages/Careers";
import Events from "./components/Pages/Events";
import Products from "./components/Pages/Products";
import Support from "./components/Pages/Support";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;
