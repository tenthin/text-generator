import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import { render } from '@testing-library/react';


class App extends Component {
  construct(props) {
    super(props);
    this.state = {
      paras: 4,
      html : true,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html);
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
