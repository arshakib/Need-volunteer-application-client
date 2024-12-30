import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
    document.body.className = checked ? "dark-mode" : "light-mode";
    console.log(document.body.className);
  };
  return (
    <>
      <div className="dark-mode">
        <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
