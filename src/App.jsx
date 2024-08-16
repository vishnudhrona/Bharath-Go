import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hompage from "../Pages/Hompage"
import Myorder from "../Pages/Myorder"
import Orders from "../Pages/Orders"
import Clothespage from "../Pages/Clothespage"
import Electronicspage from "../Pages/Electronicspage"
import Furniturepage from "../Pages/Furniturepage"
import Toyspage from "../Pages/Toyspage"
import Loginpage from "../Pages/Loginpage"
import Signuppage from "../Pages/Signuppage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route path="/myorders" element={<Myorder />} />
      <Route path="/orderdetails/:index" element={<Orders />} />
      <Route path="/clothes" element={<Clothespage />} />
      <Route path="/electronics" element={<Electronicspage />} />
      <Route path="/furniture" element={<Furniturepage />} />
      <Route path="/toys" element={<Toyspage />} />
      <Route path="/signup" element={<Signuppage />} />
      <Route path="/login" element={<Loginpage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
