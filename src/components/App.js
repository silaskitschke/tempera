import "./App.scss";
import { ContextProvider } from "../store/ContextProvider";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AnimatedRoutes></AnimatedRoutes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
