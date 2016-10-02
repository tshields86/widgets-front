import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute, withRouter } from 'react-router';
import { Jumbotron, Button } from 'react-bootstrap';


class Welcome extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Travis' Widgets</h1>
          <p>A widget a day keeps the doctor away.</p>
          <Link to="/About">
            <Button bsStyle="info" bsSize="large">Learn more</Button>
          </Link>
        </Jumbotron>
      </div>
    );
  }
}

export default Welcome;
