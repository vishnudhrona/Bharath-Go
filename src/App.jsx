import { BrowserRouter, Route, Routes } from "react-router-dom"
import Hompage from "../Pages/Hompage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Hompage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
