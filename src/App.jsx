import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hompage from "../Pages/Hompage"
import Myorder from "../Pages/Myorder"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/myorders" element={<Myorder />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
