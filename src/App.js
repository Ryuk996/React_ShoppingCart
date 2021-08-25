import logo from './logo.svg';
import './App.css';

import Header from './cartcontext';
import Header1 from './header1';
import Home from './home';
import Cart from './cart';
import Card from './card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CartProvider } from './cartcontext';


function App() {
  return (
    <div >
      <Router>
      <Header1></Header1>
      
      <div className="container-fluid">
        
          <Switch>
            <CartProvider>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/cart" component={Cart} exact={true}/>
            </CartProvider>
          </Switch>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
