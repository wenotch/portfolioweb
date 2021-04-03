import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./AppComponents/NavrBar/Navbar";
import About from "./Routes/About/About";
import Contact from "./Routes/Contact/Contact";
import Home from "./Routes/Home/Home";
import Tech from "./Routes/Tech/Tech";
import Works from "./Routes/Works/Works";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/tech" exact component={Tech} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
