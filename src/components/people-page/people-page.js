import React from 'react';
import './people-page.css';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorButton from '../error-button/error-button';

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: 3,
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({selectedPerson});
  }

  render() {

    if (this.state.hasError) {
      return (
        <div className="people-container">
          <ErrorIndicator/>
        </div>
      );
    }

    return(
      <div className="people-container">
        <div><ItemList onItemSelected={this.onPersonSelected}/></div>
        <div><PersonDetails personId={this.state.selectedPerson}/></div>
        <div><ErrorButton/></div>
    </div>
    );
  }
}