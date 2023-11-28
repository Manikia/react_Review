import './App.css';
import Navbar from './navbar';
import Home from './home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // //creatina  variable to output
  // const link = 'www.google.com'
  // const title = 'Welcome to new blog'

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* the thing with our switch statement is that it sends a request every time we go to a different page which isnt too efficient so we can avoid that by adding router links */}
          <Switch>
            {/* when we do a path it will stop when it hits the most similar one even though it might be wrong so to avoid it we have to add 'exact' */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
          {/* =<Home/> */}
          {/* <h1>{title}</h1>
          <button href={link}>click me</button> */}
        </div>
      </div>
    </Router>
  );
}

//we always export the files and be able to use them eksewhere
export default App;
