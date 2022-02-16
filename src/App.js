import './App.css';
import React, {useState,useEffect} from 'react';



const App = () => {
  const[paragraphs,setParagraphs] = useState([]);
  const[tag,setTag] = useState('p');
  const[inputValue,setInputValue] = useState(1);
  const[includeHtml,setIncludeHtml] = useState("Yes")


  useEffect(() =>{
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`;


    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;
