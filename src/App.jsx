import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
