import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./Components/contacts/Contacts";
import Header from "./Components/layout/Header";
import AddContact from "./Components/contacts/AddContact";
import EditContact from "./Components/contacts/EditContact";
import { Provider } from "./context";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";

import Test from "./Components/test/Test";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            {/* Header is outside of switch means it is appeared on all pages */}
            <Header branding="Contact Manager" />
            {/* passing properties to contact component */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;