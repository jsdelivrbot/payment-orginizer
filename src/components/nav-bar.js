import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {

    return (
      <div>
      Nave here
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/details">Detials</Link></li>
    </ul>
    </div>
  );

  }

}