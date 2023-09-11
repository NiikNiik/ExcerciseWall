import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import ExcerciseForm from "./components/ExcerciseForm";
import EditExcercise from "./components/EditExcercise";
import ViewExcercise from "./components/ViewExcercise";
import './App.css';
import { useEffect, useState } from "react";
import axios from 'axios'; // Import Axios globally here

function App() {
  const [quote, setQuote] = useState(""); // Fix the state variable name, it should be setQuote, not setQuotes

  const options = {
    method: 'GET',
    url: 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote',
    params: {
      token: 'ipworld.info'
    },
    headers: {
      'X-RapidAPI-Key': '64d092dd88mshc0a6c9bdcffa707p1ba1fajsn32dae7844a0c',
      'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
  };

  const quoteAPI = async () => {
    try {
      const response = await axios.request(options);
      setQuote(response.data); // Update the state with the fetched quote
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, []);

  return (
    <div className="App">
      <h1 style = {{marginLeft: '400px'}}>"{quote.text}"</h1>
      <h1 style={{ marginLeft: '50px' }}>Exercise Wall</h1>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<ExcerciseForm />} />
          <Route path="/edit/:id" element={<EditExcercise />} />
          <Route path="/view/:id" element={<ViewExcercise />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;