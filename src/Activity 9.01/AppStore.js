import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useLocation,useRouteMatch, useParams } from 'react-router-dom'

let Inventory = [
    { id: 1, name: "Shoes", description: "Some shoes you can buy" },
    {
      id: 2,
      name: "Backpack",
      description: "This backpack can fit so much inside of it"
    },
    {
      id: 3,
      name: "Travel Mug",
      description: "A travel mug. Fill it with liquids!"
    }
  ];

const Store = () => {
    const {path, url} = useRouteMatch();
    return(
        <Router>
            <div className="store">
                <h2>Items for Sale</h2>
                <hr />
                <Switch>
                <Route exact path={`${path}`}>
                    {Inventory.map(i => (
                    <ItemSmall key={`is-${i.id}`} {...i} baseUrl={url} />
                    ))}
                </Route>
                <Route path={`${path}/items/:itemId`}>
                    <Item />
                </Route>
                <Route path="*">
                    <ItemNotFound />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}

const ItemSmall = props => (
    <div className="Item" key={`item-${props.id}`}>
      <Link to={`${props.baseUrl}/items/${props.id}`}>{props.name}</Link>
    </div>
  );

  const Homepage = () => (
    <div className="Homepage">
    <h1>Homepage</h1>
    <hr />
    <p>This is our homepage.</p>
    </div>
  );

const Item = () => {
    let { itemId } = useParams();
    const [item, ...rest] = Inventory.filter(i => i.id.toString() === itemId);
    if (item) {
      return (
        <div className="Item">
          <p>
            <strong>id:</strong> {item.id}
          </p>
          <p>
            <strong>name:</strong> {item.name}
          </p>
          <p>
            <strong>description:</strong> {item.description}
          </p>
        </div>
      );
    } else {
      return <ItemNotFound />;
    }
  };

const ItemNotFound = () => {
    <div className="ItemNotFound">
    <h2>We're sorry, we could not find that item in our store!</h2>
  </div>
}

const NotFound = () => (
    <div className="NotFound">
      <h2>We're sorry, we couldn't find that page!</h2>
    </div>
  );

const AppStore = () => (
    <Router>
    <div className="App">
      <h1>My Store</h1>
      <hr />
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/store">Store</Link>
      <hr />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
)

export default AppStore;