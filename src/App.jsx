// import { useState } from 'react'
import Dashboard from './components/pages/Dashboard'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Pages/Home'
import Category from './components/Pages/Category'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import MainLayouts from './components/Layouts/MainLayouts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    element: <MainLayouts />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]

  // createRoutesFromElements(
  //   <Route>
  //     <Route index element={<Dashboard />}/>
  //     <Route path='/home' element={<Home />}/>
  //     <Route path='/category' element={<Category />}/>
  //     <Route path='/about' element={<About />}/>
  //     <Route path='/contact' element={<Contact />}/>
  //   </Route>
  // )
)

export default router
