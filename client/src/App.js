import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './pages/frontpage'
import CreateReview from './pages/createreview'
import NewHome from './pages/newhome'
import Dashboard from './pages/dashboard'

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FrontPage/> } />
        <Route path="/createReview" element={ <CreateReview/> } />
        <Route path="/newHome" element={ <NewHome/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
