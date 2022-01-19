import './App.css'
import React from 'react'
import ReactRouter from './ReactRouter'
import {HashRouter} from 'react-router-dom'
import Index from "@/component/Layout"

function App() {
  return (
    <HashRouter>
      <Index>
        <ReactRouter></ReactRouter>
      </Index>
    </HashRouter>
  )
}

export default App
