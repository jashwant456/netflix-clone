import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import { pagesInfo } from "./utils/pagesInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path={pagesInfo.LOG_IN.pagePath} element={pagesInfo.LOG_IN.component}/>
        <Route exact path={pagesInfo.NETFLIX.pagePath} element={pagesInfo.NETFLIX.component}/>
        <Route exact path={pagesInfo.NETFLIX_PLAYER_PAGE.pagePath} element={pagesInfo.NETFLIX_PLAYER_PAGE.component}/>
        <Route exact path={pagesInfo.SIGN_UP.pagePath} element={pagesInfo.SIGN_UP.component}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
