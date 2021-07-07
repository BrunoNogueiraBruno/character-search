import { useState } from 'react';
import { getAllCharacters } from './api';

function App() {
  const [list, setList] = useState([])
  getAllCharacters().then((result) => setList(result))

  const getChars = () => list.map((char: any, index) =>
    <div key={`character-${index}`}>
      <span>{char.name}</span>
      {char.description}
    </div>)

  return (
    <div>
      {getChars()}
    </div >
  );
}

export default App;
