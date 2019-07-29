import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends React.Component {
  swapiService = new SwapiService();

  state = {
    person: {}
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const {personId} = this.props;
    
    if(!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then((person)=> {
      this.setState({person});
    })
  }

  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.person;

    return (
      <div className="person-details">
        <h3 className="title">Person: {name}, Id: {id}</h3>
        <ul>
          <li>Gender: {gender}</li>
          <li>Birth year: {birthYear}</li>
          <li>Eye color: {eyeColor}</li>
        </ul>
      </div>
    );
  }
}