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

interface FeatureHouse {
  id: number;
  address: string;
  country: string;
  description: string;
  price: number;
  photo: number;
}

function App() {
  const allHouses: FeatureHouse[] = useHouses();
  const featureHouse = useFeaturedHouse(allHouses);
  const header = <Header subtitle="Providing Housing All Over The World." />;

  return (
    <HousesContext.Provider value={allHouses}>
      <Router>
        <div className="container">
          {header}
          <HouseFilter />

          <Routes>
            <Route
              path="/"
              element={featureHouse && <FeaturedHouse house={featureHouse} />}
            ></Route>
            <Route
              path="/searchresults/:country"
              element={<SearchResults  />}
            ></Route>
            <Route
              path="/house/:id"
              element={<HouseFromQuery  />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </HousesContext.Provider>
  );
}

export default App;
