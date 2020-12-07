import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import './App.css';
import global from "./global";
import indo from "./indo";
import provinsi from "./provinsi";

function App() {
  return (
    <BrowserRouter>
    <div >
     <nav>
       <ul>
       <li>
         <Link to='/'>Global</Link>
         </li>
         <li>
         <Link to='/indonesia'>Indonesia</Link>
         </li>
         <li>
         <Link to='/provinsi'>Provinsi</Link>
         </li>
       </ul>
     </nav>
     <Switch>
       <Route exact path='/' component={global}/>
       <Route path='/indonesia' component={indo}/>
       <Route path='/provinsi' component={provinsi}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
