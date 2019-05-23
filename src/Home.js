import React from 'react';
import Page from './Page';
import { ButtonToolbar, Button } from 'react-bootstrap'
import Link from 'react-router-dom/Link';

export default function Home () {
  const topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"]
  return (
    <Page>
      <nav className="nav">
        <div className="navLeft"></div>
        <div className="navTitle">Home</div>
        <div className="navRight"></div>
      </nav>
      <div className='home-page'>
        <h5>Top 5 GitHub Users</h5>
        <h6>Tab the user name to see more information</h6>
        <ButtonToolbar>
          {
            topFive.map((username, index) => (
              <Link
                to={{
                  pathname: `/person/${username}`,
                  state: { prev: true },
                }}
                key={index}
              >
                <Button key={index}>{username}</Button>
              </Link>
            ))
          }
        </ButtonToolbar>
      </div>
    </Page>
  );
}