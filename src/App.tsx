import './App.css';
import './data'
import { List } from './components/list/List';
import { useState } from 'react';
import data from './data';

function App() {
  const [people, setPeople] = useState(data);
  return (
      <div className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people}/>
        <button onClick={()=>{setPeople([])}}>Clear all</button>
      </div>
      
  );
}

export default App;
