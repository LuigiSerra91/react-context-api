import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ChiSiamo from './pages/ChiSiamo'
import Home from './pages/Home'
import DefaultLayout from './pages/DefaultLayout'
import PostCard from './pages/PostCard'
import GlobalContexts from './GlobalContec/GlobalContexts'
import PostPage from './pages/PostPage'
function App() {

  const api_url = 'http://localhost:3002'
  return (
    <>

      <GlobalContexts.Provider value={{ api_url }} >
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>

              <Route path='/' element={<Home />} />
              <Route path='/chisiamo' element={<ChiSiamo />} />
              <Route path='/postlist' element={<PostPage />} />
              <Route path='/postlist/:id' element={<PostCard />} />
            </Route>



          </Routes>
        </BrowserRouter>
      </GlobalContexts.Provider>


    </>
  )
}

export default App