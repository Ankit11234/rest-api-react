import React from 'react'
import Cards from './Cards'
import './Map.css'
import {useState, useEffect} from 'react';


function Map({input1,region,dmode}) {

    const [datas,setDatas]=useState([]);
    const [searched,setSearched]=useState([]);

    const getData = async()=>{
        await fetch('https://restcountries.eu/rest/v2/all')
         .then(res=>res.json())
         .then(data=>{
             console.log(data);
             setDatas(data);

         })
     }

     const getSearch = () => {
        const result = datas.filter(it=>it.name.toUpperCase().includes(input1.toUpperCase()))
                 setSearched(result)
     }

     const getFilter = () => {
        const filt = datas.filter(it=>it.region===region)
        setSearched(filt)
    }

    console.log(input1)
  
    useEffect(()=>{
    getSearch();
    },[input1]);

     useEffect(()=>{
        getFilter();
      },[region]);

    useEffect(()=>{
        getData();
    },[]);



    return (
        <div className='map'>

            {datas?.length > 0 ?
             searched.length > 0 ? 
             searched.map(i => (<Cards i={i} dmode={dmode} key={i.numericCode} input1={input1}
                   />))
            :
             datas.map(i => (
               <Cards i={i}  dmode={dmode} key={i.numericCode} input1={input1} />

               ))
            :
            <div className="load"><h1>Loading...</h1></div>

               }            
        </div>
    )
}

export default Map
