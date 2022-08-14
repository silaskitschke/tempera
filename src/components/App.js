import "./App.scss";
import { ContextProvider } from "../store/ContextProvider";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header></Header>
        <div className="page-wrapper">
          <AnimatedRoutes></AnimatedRoutes>
        </div>
        <Footer className="pd-lr"></Footer>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
