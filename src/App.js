import './App.css';
import React, {useState} from 'react';



const App = () => {
  const[paragraphs,setParagraphs] = useState([]);
  const[tag,setTag] = useState('p');
  const [inputValue,setInputValue] = useState(1);

  
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
