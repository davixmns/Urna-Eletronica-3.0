import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import {Urna} from "./pages/urna/Urna";
import {Login} from "./pages/login/Login";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path="/urna" element={<Urna/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
