import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MoviesAndShows from "./pages/MoviesAndShows/List";
import Support from "./pages/Support";
import Subscriptions from "./pages/Subscriptions";
import MovieDetail from "./pages/MoviesAndShows/MovieDetail";
import ShowDetail from "./pages/MoviesAndShows/ShowDetail";
import { ScrollToTop } from "./lib/utils";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}

export default App;
