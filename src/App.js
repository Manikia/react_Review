import './App.css';
import Navbar from './navbar';
import Home from './home';

function App() {
  // //creatina  variable to output
  // const link = 'www.google.com'
  // const title = 'Welcome to new blog'

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
        {/* <h1>{title}</h1>
        <button href={link}>click me</button> */}
      </div>
    </div>
  );
}

//we always export the files and be able to use them eksewhere
export default App;
