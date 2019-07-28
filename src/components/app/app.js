import React from 'react';
import './app.css';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const App = () => {
    return (
        <div className="app">
            <Header/>

            <div className="content-conatiner">
                <RandomPlanet/>

                <div>
                    <ItemList/>
                </div>
                <div>
                    <PersonDetails/>
                </div>
            </div>

        </div>
    )
}

export default App;