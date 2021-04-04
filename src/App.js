import { BrowserRouter, useLocation, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./AppComponents/NavrBar/Navbar";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Home from "./Routes/Home/Home";
import Tech from "./Routes/Tech/Tech";
import Works from "./Routes/Works/Works";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <div className="app">
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/tech" exact component={Tech} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
