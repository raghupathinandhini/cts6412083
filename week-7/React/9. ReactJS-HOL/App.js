import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import ScoreBelow70 from './Components/ScoreBelow70';
import OddPlayers from './Components/OddPlayers';
import EvenPlayers from './Components/EvenPlayers';
import ListofIndianPlayers from './Components/ListofIndianPlayers';

function App() {
  const flag = false;

  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elisabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Raina', score: 75 },
    { name: 'Mr. Rohit', score: 80 },
  ];

  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];
  const IndianPlayers = ['First Player', 'Second Player', 'Third Player', 'Fourth Player'];

  if (flag === true) {
    return (
      <div>
        <h1>List of Players</h1>
        <ListofPlayers players={players} />
        <hr />
        <h1>List of Players having Scores Less than 70</h1>
        <ScoreBelow70 players={players} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Odd Players</h1>
        <OddPlayers players={IndianTeam} />
        <hr />
        <h1>Even Players</h1>
        <EvenPlayers players={IndianTeam} />
        <hr />
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
