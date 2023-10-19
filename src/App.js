import { useState } from 'react';
import app from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [conversionResult, setConversionResult] = useState('');

  const convert = () => {
    // Implement your password conversion logic here
    // For example, let's reverse the input password
    const convertedPassword = inputValue.split('').map(char => {
      if (char === 'i' || char === 'I') {
        // If the character is 'i', make it red
        return <span style={{ color: 'red'  }}>{char}</span>;
      } else if (char === 'l' || char === 'L') {
        // If the character is 'l', make it blue
        return <span style={{ color: 'blue' }}>{char}</span>;
      }
      return char;
    });

    // Update the conversionResult state with the result
    setConversionResult(convertedPassword);
  }
  
  
  return (
    <div className={app.App}>
      <h1>Password convertor</h1>
      <input
      className={app.input}
      type="test"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder='Enter password'>
       </input>
       <button onClick={convert}>Convert</button>
      <h2>Output format:<br/>
      "i or I" will be <span style={{color: "red"}}>red</span><br/>
      "l or L" will be <span style={{color: "blue"}}>blue</span></h2>
      <div>{conversionResult}</div>
    </div>
  );
}
export default App;
