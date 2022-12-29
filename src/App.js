import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/Home'
import Landing from './pages/Landing'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='home' element={<Home />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
