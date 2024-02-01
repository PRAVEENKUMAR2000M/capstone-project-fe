import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import React from 'react'
import Home from "../components/Home";
import Signup from '../components/Signup'
import CreateQueries from "../components/CreateQueries";
import NewQuery from "../components/NewQuery";
import Query from "../components/Query";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/createquery" element={<CreateQueries />} />
        <Route path="/newQuery" element={<NewQuery />} />
        <Route path="/viewQuery" element={<Query />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App