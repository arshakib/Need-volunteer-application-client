import Nav from "./Component/Nav";
import Footer from "./Component/Footer";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
