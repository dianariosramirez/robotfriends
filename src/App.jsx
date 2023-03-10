import React, {useState} from "react";
import CardList from './components/Cardlist';
import SearchBox from './components/SearchBox';

const App = () => {
    const [ roboList, setRobolist ] = useState( [] );
    const [ searchField, setSearchField ] = useState( "" );

    const onSearchChange = ( event ) => {
        setSearchField( event.target.value );
        console.log( searchField );
        const newArrayFiltered = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })

        setRobolist(newArrayFiltered);
    };

    return (
        <div className="tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList robots={roboList} /> 
        </div> 
    );
}

export default App;