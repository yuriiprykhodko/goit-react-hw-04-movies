import { Route, Switch } from "react-router";
import { lazy, Suspense } from "react";

import "./styles.css";
import Navigation from "./Components/Navigation/Navigation";


const HomePage = lazy(() =>
  import("./pages/HomePage/HomePage.js" /*webpackChunkName:'HomePage'*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage/MoviesPage.js" /*webpackChunkName:'MoviesPage'*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName:'MovieDetailsPage'*/
  )
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>ЗАГРУЖАЕМ СТРАНИЦУ...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
