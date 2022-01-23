import './App.css';
import React from 'react';
import ReactRouter from './pages/ReactRouter';
import { HashRouter } from 'react-router-dom';
import Layout from '@/component/Layout';

function App() {
    return (
        <HashRouter>
            <Layout></Layout>
        </HashRouter>
    );
}

export default App;
