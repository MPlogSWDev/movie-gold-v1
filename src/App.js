import axios from 'axios';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './component/Layout';
import { Routes, Route} from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");
      // console.log(response.data);
      setMovies(response.data);

      console.log(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  },[])



  return (
    <div className="App">
      <Routes></Routes>
    </div>
  );
}

export default App;
