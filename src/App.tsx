import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/home.page';
import './App.css';
import TweetDetailsPage from "./pages/tweet-details/tweet-details.page";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweet/:tweetId" element={<TweetDetailsPage />} />
        </Routes>
      </Router>
  );
}

export default App;
