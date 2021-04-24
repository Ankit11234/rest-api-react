import React,{useState, useEffect} from 'react'
import './Map.css'


function Select({regions,dmode}) {
    const [filter,setFilter] =  useState([]);
    return (
        <div >
             <select className={`${dmode && "dark-elem"}`}  onChange={(e)=>{regions(e.target.value) ;
              console.log(e.target.value)}}
             >
              <option  onChange={(e)=>{regions(e.target.value)}} value="filter">Select-region</option>
              <option  onChange={(e)=>{regions(e.target.value)}} value="Africa">Africa</option>
              <option onChange={(e)=>{regions(e.target.value)}}  value="Americas">Americas</option>
              <option onChange={(e)=>{regions(e.target.value)}} value="Asia">Asia</option>
              <option onChange={(e)=>{regions(e.target.value)}}  value="Europe">Europe</option>
              <option onChange={(e)=>{regions(e.target.value)}} value="Oceania">Oceania</option>
            </select>
            
        </div>
    )
}

export default Select
