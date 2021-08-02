import { BrowserRouter } from "react-router-dom";

import Routes from "./components/Routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
