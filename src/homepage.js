import Component from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation, Link, useRouteMatch } from 'react-router-dom';
import AppTheme from './Exercise 6.01/AppTheme'
import Parent from './Exercise 6.02/Parent'
import Quiz from './Quiz'
import Profile from './Profile';
import Message from './Message/Message';
import Animal from './Exercise 7.01/Animal'
import AppStore from './Activity 9.01/AppStore'
import LoginButton from './Exercise 11.02/LoginButton'
import Counter from './Activity 11.01/Counter'
import UsernameForm from './Exercise 12.02/SimpleForm'
import ImageToggle from './Exercise 11.01/ImageToggle'
import ShoppingCart from './Exercise 13.01/ShoppingCart'
import ShoppingCart2 from './Exercise 13.02/ShoppingCart2'
import TemperatureApp from './Exercise 14.01/Temperature'

const RoutingPage = () => (
    <Router>
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route exact path="/exercise">
                <Exercise />
            </Route>
            <Route exact path="/activity">
                <Activity />
            </Route>
            <Route path="*">
            <h1>404 - Component Not Found</h1>
                <a href="/">Return Home</a>
            </Route>
        </Switch>
    </Router>
);

const Home = () => (
    <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
    </div>
  );

  const About = () => {
    const { path, url } = useRouteMatch(); 
    return(
      <Router>
        <div className="About">
            <h1>About Page</h1>
            <hr />
            <p>Information about your app or who you are would go here.</p>
          </div>
          <hr />
      </Router>
    )
  };

  const Exercise = () => {
    const { path, url } = useRouteMatch(); 
      return (
          <Router>
              <div className="Exercise">
                <h1>Exercise Page</h1>
                <hr />
                <p>Information about exercise.</p>
            </div>
            <Link to={`${url}/101`}>Exercise 1.01</Link> &nbsp;
            <Link to={`${url}/201`}>Exercise 2.01</Link> &nbsp;
            <Link to={`${url}/601`}>Exercise 6.01</Link> &nbsp;
            <Link to={`${url}/602`}>Exercise 6.02</Link> &nbsp;
            <Link to={`${url}/701`}>Exercise 7.01</Link> &nbsp;
            <Link to={`${url}/1101`}>Exercise 11.01</Link> &nbsp;
            <Link to={`${url}/1102`}>Exercise 11.02</Link> &nbsp;
            <Link to={`${url}/1202`}>Exercise 12.02</Link> &nbsp;
            <Link to={`${url}/1301`}>Exercise 13.01</Link> &nbsp;
            <Link to={`${url}/1302`}>Exercise 13.02</Link> &nbsp;
            <Link to={`${url}/1401`}>Exercise 14.01</Link> &nbsp;
            <hr />
            <Switch>
                <Route path={`${path}/101`}><Quiz/></Route>
                <Route path={`${path}/201`}><Profile/></Route>
                <Route path={`${path}/601`}><AppTheme/></Route>
                <Route path={`${path}/602`}><Message/></Route>
                <Route path={`${path}/701`}><Animal/></Route>
                <Route path={`${path}/1101`}><ImageToggle/></Route>
                <Route path={`${path}/1102`}><LoginButton/></Route>
                <Route path={`${path}/1202`}><UsernameForm/></Route>
                <Route path={`${path}/1301`}><ShoppingCart/></Route>
                <Route path={`${path}/1302`}><ShoppingCart2/></Route>
                <Route path={`${path}/1401`}><TemperatureApp/></Route>
            </Switch>
          </Router>
      )
  };

  const Activity = () =>{
    const { path, url } = useRouteMatch(); 
    return (
        <Router>
             <div className="Activity">
                <h1>Activity Page</h1>
                <hr />
                <p>Information about activity.</p>
            </div>
            <Link to={`${url}/901`}>Activity 9.01</Link> &nbsp;
            <Link to={`${url}/1101`}>Activity 11.01</Link>
            <hr/>
            <Switch>
            <Route path={`${path}/901`}><AppStore/></Route>
            <Route path={`${path}/1101`}><Counter/></Route>
            </Switch>
        </Router>
    )
  };

  const Navbar = () => (
      <div className="Navbar">
          <Link to="/">Home</Link> &nbsp;
          <Link to="/about">About</Link> &nbsp;
          <Link to="/exercise">Exercise</Link> &nbsp;
          <Link to="/activity">Activity</Link> &nbsp;
      </div>
  );

export default RoutingPage;