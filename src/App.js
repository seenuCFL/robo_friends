import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {setRobots(users)});
  },[])

  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })
  if(!robots.length){
    return <h1>Loading...</h1>
  }
  else{
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
        <CardList robots={filteredRobots}/>
        </Scroll>
        
      </div>
    );
  }
  
}

export default App;