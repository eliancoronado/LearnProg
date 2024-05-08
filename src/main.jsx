import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Features from './components/pages/Features/Features'
import Blog from './components/pages/Blog/Blog'
import Footer from './components/footer/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <div className="wr">
      <Home />
      <Features />
      <Blog />
      <Footer />
    </div>
  </React.StrictMode>,
)
