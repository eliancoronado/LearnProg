import './App.css'
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'

import Blog from './components/pages/Blog/Blog'
import Features from './components/pages/Features/Features'
import Home from './components/pages/Home/Home'

function App() {

  return(
    <>
      <Header />
      <div className="wr">
        <Home />
        <Features />
        <Blog />
        <Footer />
      </div>
    </>
      
  )
}

export default App
