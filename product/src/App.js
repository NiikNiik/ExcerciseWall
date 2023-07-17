import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import ExcerciseForm from "./components/ExcerciseForm";
import EditExcercise from "./components/EditExcercise";
import ViewExcercise from "./components/ViewExcercise";
import './App.css';

function App() {
  return (
  
    <div className="App">
      <h1 style={{marginLeft: '50px'}}>Excercise Wall</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<ExcerciseForm />} />
          <Route path="/edit/:id" element={<EditExcercise />} />
          <Route path= "/view/:id" element = {<ViewExcercise/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;