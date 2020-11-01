//import './App.css';
import './Style.css'
import Register from "./Components/Register"
import Home from "./Components/Home"
import Question from "./Components/Question"
import  Answer from "./Components/Answer"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return ( 
    <Router>
    <div className="App">
      <switch>
      <Route path="/" exact component={Register} /> 
       <Route path="/home" component={Home} /> 
       <Route path="/question" component={Question} /> 
       <Route path="/answer" component={Answer} /> 
    </switch>
    </div>
    </Router>
  );
}

export default App;
