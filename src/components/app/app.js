import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorButton from '../error-button/error-button';
import PeoplePage from '../people-page/people-page';

export default class App extends React.Component {
  state = {
    selectedPerson: 1,
    hasError: false
  }


  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true});
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="app">
        <Header/>

        <div className="content-conatiner">
          <div className="random-planet-container">
            <RandomPlanet/>
          </div>

          <PeoplePage/>
          <PeoplePage/>
          <PeoplePage/>

          <div><ErrorButton/></div>
        </div>
      </div>
    )
  }
}