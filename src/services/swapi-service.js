export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
  
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if (!res.ok) {
        throw new Error(`Could not fetch ${url} received ${res.status}`);
      }
  
      return await res.json();
    }

    _extractId(item) {
      const idRegExp = /\/([0-9]*)\/$/;
      return item.url.match(idRegExp)[1];
    }
  
    /**
     * Piple service
     */
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    getPerson(id) {
      return this.getResource(`/people/${id}`);
    }
  
    /**
     * Planets service
     */

    _transformPlanet(planet) {
      return {
        id: this._extractId(planet),
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(planet);
    }
  
    /**
     * Starship service
     */
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    getStarships(id) {
      return this.getResource(`/starships/${id}`);
    }
    
  }
  
//   const swapi = new SwapiService();
  
//   swapi.getPerson(3)
//   .then((p) => {
//     console.log(p);
//   })
//   .catch((err) => {
//     console.error('Could not fetch', err);
//   });
