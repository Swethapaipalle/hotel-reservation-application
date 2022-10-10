import './App.scss'
import React from 'react'
import { 
  BrowserRouter as Router,
  Route,
  Routes 
} from 'react-router-dom'
import CreateForm from './pages/CreateForm'
import EditForm from './pages/EditForm'
import ViewPost from './pages/ViewPost'

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path='/' exact element={<CreateForm/>}></Route>
          <Route path='/create' element={<CreateForm/>}></Route>
          <Route path='/edit/:post_id' element={<EditForm/>}></Route>
          <Route path='/:post_id' element={<ViewPost/>}></Route>
        </Routes>
      </main>
    </Router>
  )
}