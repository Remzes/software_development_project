import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import "../assets/Styles/App.css";

//A custom regenerator runtime and core.js.
import "babel-polyfill";

//Components
import Landing from './Langing/index';
//End of Component

//App Component
class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }

  render() {
    const {loading} = this.state;

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="container" id="container" ref="container">
            <div className="content" id="content">
              <Route exact path="/" component={Landing}/>
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;