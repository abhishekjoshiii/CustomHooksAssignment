import { useState} from 'react';

import './App.css';
import useOddEven from './Components/useOddEven';

function App() {
  const [number, setNumber] = useState(0);
  const isOdd = useOddEven(number);

  return (
    <div>
      <label>Enter a Number:</label>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
      <p>{number} is {isOdd ? 'Odd' : 'Even'}</p>
    </div>
  );
}


export default App;
