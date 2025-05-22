import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import KiemTraDonHang from "./components/pages/CheckOder";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/Slider";
import ProductSection from "./components/Section";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/kiemtradonhang" element={<KiemTraDonHang />} />
      </Routes>
      <NavBar />
      <ImageSlider />
      {[1, 2, 3, 4, 5].map((i) => (
        <ProductSection
          key={i}
          title={`Danh mục ${i}`}
          link={`https://example.com/danh-muc-${i}`}
        />
      ))}
      <Footer />
    </Router>
  );
}
export default App;
