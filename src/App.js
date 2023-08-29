import { Routes, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DetailPage from "./pages/DetailPage";
import "./App.css";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route path="/detail/:listingId" element={<DetailPage />}></Route>
         </Routes>
      </BrowserRouter>
   );
}

export default App;
