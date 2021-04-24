import React, { useState, useEffect } from 'react'
import './Map.css'
import SearchIcon from '@material-ui/icons/Search';

function Search({change,dmode}) {
     const [input, setInput] = useState('');
     useEffect(() => {
        function update() {
    dmode
      ? document
          .querySelector("input[type=text]")
          .style.setProperty("--c", "white")
      : document
          .querySelector("input[type=text]")
          .style.setProperty("--c", "black")
      }
        update();
    }, [dmode])

    return (
        <div className={`searchs  ${dmode && "dark-elem"}`}>
            <button className={`btn-dark ${dmode && "dark-elem"}`} >
                <SearchIcon />

                <input className={`${dmode && "dark-elem"}`} type="text"
                placeholder='Search for a country....' value={input} onChange={(event) => {
                    setInput(event.target.value);
                    change(event.target.value);
                }}
                />
            </button>

        </div>
    )
}

export default Search
