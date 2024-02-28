import './App.css'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import FrontPage from './pages/frontpage'
import CreateReview from './pages/createreview'

import NewHome from './pages/newhome'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import CreateAcc from './pages/createAcc'
import NewReview from './pages/newReview'

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <NewHome/> } />
        <Route path="/oldCreateReview" element={ <CreateReview/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/create" element={ <CreateAcc/> } />
        <Route path="/newReview" element={ <NewReview/> } />
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;
