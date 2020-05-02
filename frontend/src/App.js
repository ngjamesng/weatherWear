import React from 'react';
import Routes from "./Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNav from "./SiteNav";
function App() {
  return (
    <div className="App">
      <SiteNav />
      <Routes />
    </div>
  );
}

export default App;
