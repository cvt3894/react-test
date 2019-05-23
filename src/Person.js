import React, { Component } from 'react';
import Page from './Page';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Nav from './Nav';

class Person extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount () {
    fetch(`https://api.github.com/users/${this.props.match.params.username}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ data })
      });
  }
  render () {
    const data = this.state.data
    return (
      <Page>
        <nav className="nav">
          <div className="navLeft" onClick={() => window.history.back()}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABzQAAAc0BnvLTTgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACGSURBVEiJ7dUxDgFhEIZhRyDsboRie0fTyDomDYpNNFxEHoUpNBLFjvjFe4EnU3yZ0aiEUGONaRYwR+/RJhvoUQ0NtLgGcMgG9pgUDex+AhgXBzRPOzihHhQIZBvADavBgUDyLwmowjGgMxZ/6Ouh5SegC9riodzP+ALqUpCAGnSYpSHvdAeXh37SSlCAaQAAAABJRU5ErkJggg==" />
            Back
          </div>
          <div className="navTitle">Person</div>
          <div className="navRight"></div>
        </nav>
        {
          data && (
            <div className='row'>
              <img
                src={data.avatar_url}
                className="avatar"
              />
              <div className='row-left'>
                <div className='username'>{data.name}</div>
                <div className='user-location'>{data.location}</div>
              </div>
            </div>
          )
        }
      </Page>
    )
  }
}


export default withRouter(Person);