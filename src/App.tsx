import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "@components/ui/Header";
import PhotoDetail from "./pages/PhotoDetail";
import { FilterProvider } from "@context/FilterContext";
import { ThemeProvider } from "@context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <FilterProvider>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 py-5 mt-[60px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/photo/:id" element={<PhotoDetail />} />
              </Routes>
            </div>
          </main>
        </FilterProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
