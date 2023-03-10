import React, { useState, useEffect } from "react";
import CardList from './components/Cardlist';
import SearchBox from './components/SearchBox';

const App = () => {
    const [ robots, setRobots ] = useState( [] );
    const [ searchField, setSearchField ] = useState( "" );

    useEffect( () => {
      fetch( 'https://jsonplaceholder.typicode.com/users' )
        .then( response => response.json() )
        .then( users => setRobots( users ))
    }, []);

    const onSearchChange = ( event ) => {
        setSearchField( event.target.value );
    };

    const filteredRobots = robots.filter( robot => {
            return robot.name.toLowerCase().includes( searchField.toLowerCase() );
        })


    return !robots.length ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
            <h1>ROBOFRIENDS</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList robots={ filteredRobots } /> 
        </div> 
      );
  }

export default App;