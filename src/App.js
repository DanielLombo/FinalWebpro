import { BrowserRouter, Switch, Link, Route } from 'react-router-dom'
import './App.css';
import global from "./global";
import indo from "./indo";
import provinsi from "./provinsi";
import {Navbar,  NavDropdown, Form, Nav, FormControl, Button} from 'react-bootstrap';

const App = () => {
  return (
    <BrowserRouter>
      <div >
        <nav><Navbar bg="danger" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href=".">Global</Nav.Link>
              <Nav.Link href="/indonesia">indonesia</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
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
          <Route exact path='/' component={global} />
          <Route path='/indonesia' component={indo} />
          <Route path='/provinsi' component={provinsi} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
