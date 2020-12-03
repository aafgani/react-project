import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, Link, useRouteMatch } from 'react-router-dom';

const Routing = () => (
  <Router>
    <Navbar></Navbar>
  <Switch>
    <Route exact path="/">
        <Homepage />
      </Route>
    <Route path="/search">
    <Search />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="*">
      <h1>404 - Component Not Found</h1>
        <a href="/">Return Home</a>
    </Route>
  </Switch>
  </Router>
  );

const Homepage = () => (
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
          <Link to={`${url}`}>About Home</Link>
          &nbsp;
          <Link to={`${url}/contact`}>Contact</Link>
          &nbsp;
          <Link to={`${url}/bio`}>Bio</Link>
          <hr />
          <Switch>
          <Route path={`${path}/contact`}>
            <Contact />
          </Route>
            <Route path={`${path}/bio`}>
              <Bio />
          </Route>
        </Switch>
      </Router>
    )
  };

  const Search = () => {
    const query = new URLSearchParams(useLocation().search);
    const term = query.get('q');
    const returned = doSearch(term);
    return(
      <div className="Search">
        <h1>Search Page</h1>
        <hr />
        Found results for {term}:
        <ul>
            {returned.map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    )
  };

  const Navbar = () => (
    <div className="Navbar">
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/about">About</Link>
      &nbsp;
      <Link to="/search">Search</Link>
    </div>
  );

  const Bio = () => (
    <div className="Bio">
      <h2>Bio</h2>
      <hr />
      <p>I'm a pretty cool person.</p>
    </div>
  );
  const Contact = () => (
    <div className="Contact">
      <h2>Contact Me</h2>
      <hr />
      <p>Send me an email at test@test.com.</p>
    </div>
  );
  
  const doSearch = term => {
    const Items = [
      'Lorem Ipsum',
      'Ipsum Dipsum',
      'Foo Bar',
      'A little black cat',
      'A lazy fox',
      'A jumping dog'
    ];

    if (!term) {
      return Items;
    }
    return Items.filter(
      item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1
    );
  };

export default Routing;