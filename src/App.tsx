import './App.css';
import React from 'react';
import ReactRouter from './pages/ReactRouter';
import { HashRouter } from 'react-router-dom';
import Layout from '@/component/Layout';
import  ErrorBoundary from '@/component/ErrorBoundary'

function App() {
    return (
        <ErrorBoundary>
            <HashRouter>
                <Layout></Layout>
            </HashRouter>
        </ErrorBoundary>
    );
}

export default App;
