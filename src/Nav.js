import React, { Component } from 'react'
import Link from 'react-router-dom/Link';
import { Row, Col, Container } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render () {
    return (
      <nav className="nav">
        <div className="title">Home</div>
        {/* <Link
        to={{
          pathname: '/',
          state: { prev: false },
        }}
        className="nav__link"
      >
        Home
      </Link> */}
        {/* <Link
        to={{
          pathname: '/about',
          state: { prev: true },
        }}
        className="nav__link"
      >
        About
      </Link> */}
      </nav>
    );
  }

}
export default withRouter(Nav);