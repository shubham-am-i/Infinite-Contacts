import {useState} from 'react'
import {SkeletonTheme} from 'react-loading-skeleton'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/Home'
import Landing from './pages/Landing'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <>
            <SkeletonTheme baseColor='#D9E2EC' highlightColor='#d5d2d2'>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Landing setIsLoggedIn={setIsLoggedIn} />} />
                        {isLoggedIn && (
                            <Route path='home' element={<Home setIsLoggedIn={setIsLoggedIn} />} />
                        )}
                        <Route path='*' element={<Error />} />
                    </Routes>
                </BrowserRouter>
            </SkeletonTheme>
        </>
    )
}

export default App
