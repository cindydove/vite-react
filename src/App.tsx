import './App.css'
import React from 'react'
import ReactRouter from './ReactRouter'
import {HashRouter} from 'react-router-dom'
import Layout from '@/component/Layout'

function App() {
  return (
    <HashRouter>
      <Layout>
        <ReactRouter></ReactRouter>
      </Layout>
    </HashRouter>
  )
}

export default App
