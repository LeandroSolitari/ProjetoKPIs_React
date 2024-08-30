import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './logoDents.jpg';
import SecondPage from './SecondPage'; // Importe a nova página

const App: React.FC = () => {
    const navigate = useNavigate(); // Hook para navegação

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>PITSTOP - PROCESSO O2C E SEUS KPIs</h1>
                <button onClick={() => navigate('/second-page')}>
                    Clique aqui
                </button>
            </header>
        </div>
    );
};

const AppWrapper: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/second-page" element={<SecondPage />} />
            </Routes>
        </Router>
    );
};

export default AppWrapper;
