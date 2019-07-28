import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends React.Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: false,
    error: false,
  }

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: true
    })
  };

  updatePlanet() {
    const id = Math.floor(Math.random()*25) + 2
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  };

  render() {
  const { planet, loading, error } = this.state;
  const content = !loading ? <Spinner/> : <PlanetView planet={planet}/>

    return (
      <div className="random-planet">
        {error ? <ErrorIndicator/> : content}
      </div>
    );
  }
}


const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <h3 className="title">Planet: {name}, Id: {id}</h3>
      <div>
        <li>
          <span>Population: </span>
          <span>{population}</span>
        </li>
        <li>
          <span>Rotation Period: </span>
          <span>{rotationPeriod}</span>
        </li>
        <li>
          <span>Diameter: </span>
          <span>{diameter}</span>
        </li>
      </div>
    </>
  );
}