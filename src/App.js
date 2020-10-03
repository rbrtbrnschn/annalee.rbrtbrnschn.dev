import React from 'react';
import Header from "./modules/header"
import TopPackages from "./modules/top_packages";
import Categories from "./modules/categories"
import Footer from "./modules/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Categories/>
      <TopPackages/>
      <Footer/>
    </div>
  );
}

export default App;
