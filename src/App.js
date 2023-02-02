import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Films from "./pages/Films";
import Home from "./pages/Home";


const App = () => {
    return (

            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/films" element={<Films />}/>
                    <Route path="/people" element={<People />}/>
                    <Route path="/planets" element={<Planets />}/>
                </Routes>
            </Router>

    );
}

export default App;
