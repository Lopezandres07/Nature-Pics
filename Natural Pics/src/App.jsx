import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigate from './components/Navigate'
import Home from './views/Home'
import Favorites from './views/Favorites'
import PicturesProvider from './context/PictureContext'

const App = () => {
  return (
    <div>
      <PicturesProvider>
        <Navigate />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/Favorites'
            element={<Favorites />}
          />
        </Routes>
      </PicturesProvider>
    </div>
  )
}

export default App
