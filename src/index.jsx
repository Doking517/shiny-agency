import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Results from './components/Results'
import Profile from './components/Profile'
import createGlobalStyle from 'styled-components'


const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
        
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Survey />} path="/survey/:questionNumber" />
        <Route element={<Error />} path="*" />
        <Route element={<Results />} path="/results" />
        <Route element={<Profile />} path="/profiles" />
      </Routes>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
