import Home from "./views/home";
import "./assets/css/index.css";
import {Routes, Route} from "react-router-dom"
import StudentEntry from "./views/studentEntry";
import StudentView from "./views/studentView";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/studententry" element={<StudentEntry/>}/>
                <Route path="/studentview" element={<StudentView/>}/>
                <Route path="/demo" element={<h1>kaklsdjfh</h1>}/>
            </Routes>
            {/* <Home /> */}
        </div>
    );
}

export default App;
