import Home from "./views/home";
import "./assets/css/index.css";
import {Routes, Route} from "react-router-dom"
import StudentEntry from "./views/studentEntry";
import StudentUpdate from "./views/studentUpdate";
import StudentView from "./views/studentView";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/studententry" element={<StudentEntry/>}/>
                <Route path="/studentupdate" element={<StudentUpdate id='0'/>}/>
                <Route path="/studentview" element={<StudentView/>}/>
                <Route path="/demo" element={<h1>kaklsdjfh</h1>}/>
            </Routes>
            {/* <Home /> */}
        </div>
    );
}

export default App;
