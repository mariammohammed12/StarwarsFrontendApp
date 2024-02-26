import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import { Box } from '@mui/material';

function App() {
    return (
        <Box sx={{ backgroundColor:'#1D1D20', minHeight:'100vh'}}>
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/result/:searchValue' element={<Result />} />
                </Routes>
            </Router>
        </Box>
    );
}

export default App;
