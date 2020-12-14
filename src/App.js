import './App.css';

import { Component } from 'react';


import { CardList } from "./components/cardList/card-list.components";
import { SearchBox } from './components/SearchBox/searchBox.component';



class App extends Component{
  constructor(){
    super();
    this.state={
      monsters: [],
      SearchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters:users}));
  }

  render(){
    const {monsters, SearchField} = this.state;
    const filteredmonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
      );
    return(
      <div className="App">
      <h1>Monster Friends</h1>
      <SearchBox 
        placeholder= 'Search Monsters'
        handlechange= {e =>this.setState({ SearchField: e.target.value}) }
      />
      <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
