import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import CTA from "./CTA";
import Specials from "./Specials";
import Home from "./Home";
import "./App.css";
import "./styles.css";

import { Routes, Route } from "react-router-dom";

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
      <Specials />

      <Footer />

    </>
    // <div className="App">
    // </div>
  );
}

export default App;
