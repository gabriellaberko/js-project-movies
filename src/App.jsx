import { Home } from "./pages/Home"
import { MovieDetails } from "./pages/MovieDetails"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
  }
`

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies/:id" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
