import { useState } from 'react'
import Dashboard from './components/pages/Dashboard'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'
import Category from './components/Pages/Category'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Dashboard />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Route>
  )
)

function App({routes}) {
  // const [count, setCount] = useState(0)
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
