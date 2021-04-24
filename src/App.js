import './App.css';
import Map from './Map.js'
import Search from './Search.js'
import Select from './Select.js'
import Country from './Country.js'
import { useState } from 'react';
import { Route, HashRouter as Router } from 'react-router-dom';


function App() {
  const [input1, setInput1] = useState('');
  const [region, setRegion] = useState('');
  const [dmode, setDmode] = useState(false);

  const myfuction = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    setDmode(!dmode);
  }

  const regions = (e) => {
    setRegion(e)
  }

  const change = (a) => {
    setInput1(a);
    console.log(input1)
  }
  return (
    <Router>

      <div className={`App ${dmode && "dark-mode"}`}>
        <div className={`header ${dmode && "dark-elem"}`}>
          <h1> Where in the world?</h1>
          <div className="moon"  onClick={myfuction}>
            <i className='moon' class="fa fa-moon-o"></i>Dark Mode
        </div>
        </div>
        <Route exact path="/">

          <div className='search'>

            <Search change={change} dmode={dmode} />
            <Select regions={regions}  dmode={dmode} />

          </div>
          <Map input1={input1} region={region} dmode={dmode} />
        </Route>
        <Route exact path="/:name">
          <Country dmode={dmode}/>
          </Route> 
      </div>
    </Router>
  );
}

export default App;
