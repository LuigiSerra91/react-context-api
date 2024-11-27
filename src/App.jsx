import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import Home from './pages/Home'
import DefaultLayout from './pages/DefaultLayout'
import PostList from './pages/PostList'
import PostPage from './pages/PostPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>

            <Route path='/' element={<Home />} />
            <Route path='/chisiamo' element={<ChiSiamo />} />
            <Route path='/postlist' element={<PostList />} />
            <Route path='/postlist/:id/' element={<PostPage />} />
          </Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App