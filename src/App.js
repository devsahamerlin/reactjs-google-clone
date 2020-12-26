import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Search from './pages/Search';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="app">
      {/* Home (the one with the search on) */}
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      
      {/* SearchPage (The results page) */}


    </div>
  );
}

export default App;
