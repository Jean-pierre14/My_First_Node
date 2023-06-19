import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import Student from "./components/Student/Student"
import "./App.css"

import { links } from "./data/data"

const App = () => {
  
  return (
    <>
      <div className="container content">
        <div className="sidebar">
          <h3>Menu</h3>
          <ul className="list">
            {links.map(item => (
              <li key={item.id} className=" d-flex justify-content-between align-items-center">
                <span><img src={item.icon} alt="Icon" className="img-fluid" /></span>
                <span>{ item.name }</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="main">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Student" element={<Student/>}/>
        </Routes>
        </div>
      </div>
      
    </>
  )
}

export default App