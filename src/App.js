import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import global from "./global";
import indo from "./indo";
import provinsi from "./provinsi";
import {Navbar,  Form, Nav,} from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <nav><Navbar bg="danger" expand="lg">
          <Navbar.Brand href="#home">CovidTracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href=".">Global</Nav.Link>
              <Nav.Link href="/indonesia">indonesia</Nav.Link>
              <Nav.Link href="/provinsi">provinsi</Nav.Link>
              
            </Nav>
            <Form inline>
               
            </Form>
          </Navbar.Collapse>
        </Navbar>
          <ul>

          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={global} />
          <Route path='/indonesia' component={indo} />
          <Route path='/provinsi' component={provinsi} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
