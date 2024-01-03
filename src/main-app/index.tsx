import Header from "../components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeaturedHouse from "../modules/featured-house";
import HouseFilter from "../components/house-filter";
import SearchResults from "../modules/search-results";
import HouseFromQuery from "../modules/house/house-from-query";
import useHouses from "../components/hooks/useHouses";
import useFeaturedHouse from "../components/hooks/useFeaturedHouse";
import HousesContext from "../context/housesContext";
import "./main_page.css";

function App() {
  const allHouses = useHouses();
  const featureHouse = useFeaturedHouse(allHouses);
  const header = <Header subtitle="Providing Housing All Over The World." />;

  return (
    <HousesContext.Provider value={allHouses}>
      <Router>
        <div className="container">
          {header}
          <HouseFilter allHouses={allHouses} />

          <Routes>
            <Route
              path="/"
              element={featureHouse && <FeaturedHouse house={featureHouse} />}
            ></Route>
            <Route
              path="/searchresults/:country"
              element={<SearchResults allHouses={allHouses} />}
            ></Route>
            <Route
              path="/house/:id"
              element={<HouseFromQuery allHouses={allHouses} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </HousesContext.Provider>
  );
}

export default App;
