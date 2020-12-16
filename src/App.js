import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation.js";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Info from "./pages/Info.js";
import Services from "./pages/Services.js";
import Footer from "./components/footer/Footer";
import Gallery from "./pages/Gallery";

class App extends Component {
  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Info" component={Info} />
          <Route path="/Services" component={Services} />
          <Route path="/Gallery" component={Gallery} />
          <Footer />
        </BrowserRouter> */}
        <BrowserRouter>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Info" component={Info} />
          <Route path="/Services" component={Services} />
          <Route path="/Gallery" component={Gallery} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
