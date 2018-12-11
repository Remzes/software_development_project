import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import "../assets/Styles/App.css";
import ScrollToTop from '../decorators/scroll_to_top';

//A custom regenerator runtime and core.js.
import "babel-polyfill";

//Components
import Header from './Header/Header';
import Landing from './Langing/index';
import Dashboard from './Dashboard/Dashboard';
import SurveyNew from './Surveys/SurveyContainer/SurveyContainer';
import Admin from './Admin'
import Panel from './Panel'
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';
//End of Component

//App Component
class App extends Component {
  constructor(){
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    console.log('mounted')
    this.props.fetchUser();
    this.props.loadConfigs();
    this.props.getUsers();
    setTimeout(() => {
      this.setState({loading: false});
    }, 1500);
  }

  render() {
    const {loading} = this.state;
    if (loading) {
      return <Loader/>
    }

    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="container" id="container" ref="container">
            <Switch>
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/admin/panel" component={Panel} />
            </Switch>
            <div className="content" id="content">
              <Header />
              <Route exact path="/" component={Landing}/>
              <Route exact path="/surveys" component={Dashboard}/>
              <Route path="/surveys/new" component={SurveyNew}/>
              <Footer />
            </div>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);