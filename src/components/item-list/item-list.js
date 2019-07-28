import React from 'react';
import './item-list.css';

export default class ItemList extends React.Component {
  render() {
    return (
      <div className="itme-list">
        <ul>
          <li>Luke Skywalker</li>
          <li>Darth Vader</li>
          <li>R2-D2</li>
        </ul>
      </div>
    );
  }
}