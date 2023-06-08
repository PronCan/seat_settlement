import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Main from './component/Main';
import Context from "./component/Context";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
