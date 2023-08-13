import React from "react";
import Header from "./componants/header";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Gallary from "./Pages/Gallary";
import Review from "./Pages/Review";
import Order from "./Pages/Order";
import Team from "./Pages/Team";
import Footer from "./componants/footer";
const App = () => {
  return (
    <div id="App">
      <Header />
      <Home />
      <About />
      <Menu />
      <Gallary />
      <Review />
      <Order />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
