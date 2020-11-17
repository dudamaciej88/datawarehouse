import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <Header />
      <MainPage/>
    </Router>
  );
};

export default App;
