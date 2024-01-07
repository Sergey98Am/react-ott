import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MoviesAndShows from "./pages/MoviesAndShows/List";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import MovieDetail from "./pages/MoviesAndShows/MovieDetail";
import ShowDetail from "./pages/MoviesAndShows/ShowDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies-and-shows">
            <Route index element={<MoviesAndShows />} />
            <Route path="movie/:id" element={<MovieDetail />} />
            <Route path="show/:id" element={<ShowDetail />} />
          </Route>
          <Route path="support" element={<Support />} />
          <Route path="subscriptions" element={<Subscriptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
