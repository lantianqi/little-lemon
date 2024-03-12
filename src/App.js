import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import CTA from "./CTA";
import Home from "./Home";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<CTA />}></Route>
        <Route></Route>
        <Route></Route>

      </Routes>

      <Footer />

    </>
    // <div className="App">
    // </div>
  );
}

export default App;
