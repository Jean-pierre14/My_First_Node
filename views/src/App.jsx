import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/Home/Home"
import Student from "./components/Student/Student"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Student" element={<Student/>}/>
      </Routes>
    </>
  )
}

export default App