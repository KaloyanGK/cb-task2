import React from "react";
import QuizCard from "./components/QuizCard";
import HomePage from "./components/HomePage"
import { Routes, Route } from 'react-router-dom';
import ResultPage from "./components/ResultPage";
import getUserChoices from "./services/getUserChoices";
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizCard getUserChoices={getUserChoices} />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
