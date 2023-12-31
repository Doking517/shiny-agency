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
import { ThemeProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Survey />} path="/survey/:questionNumber" />
          <Route element={<Error />} path="*" />
          <Route element={<Results />} path="/results" />
          <Route element={<Profile />} path="/profiles" />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
