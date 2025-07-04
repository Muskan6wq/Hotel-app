import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'


function App() {

  return (

    <div>

      <Router>
        <Routes>
          {/*show Home page */}
          <Route path="/" element={<Home />} />

          {/* show Contact page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

  )

}

export default App
