import { Home } from "./pages/Home"
import { MovieDetails } from "./pages/MovieDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
