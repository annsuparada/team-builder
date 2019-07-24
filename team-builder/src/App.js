import React, { useState } from 'react';
import { render } from "react-dom";
import { teamMember} from "./data"
import Form from "./component/Form"
import CardList from './component/CardList'

import './App.css';


console.log(teamMember)

function App() {
  const [team, setTeam] = useState([]);
  

  return (
    <div className="App">
     
      <Form setTeam={setTeam} team={team}/>
      <CardList team={team} />

         
    
    </div>
  );
}

export default App;
