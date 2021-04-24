import React, {useState, useEffect} from 'react'
import { Link, useParams } from "react-router-dom";
import './BorderCountries.css'

function BorderCountries({j, dmode}) {

    const [cname, setCname] = useState('')

    const url = `https://restcountries.eu/rest/v2/alpha/${j}`


    const getName = async () => {
        await fetch(url)
        .then(res=>res.json())
        .then(data => {
          //  console.log(data.name)
            setCname(data.name)
            // test(data.name)
            // getBorder(data.name)
            console.log(data.name)
        })
    }
    
    useEffect(() => {
        getName();
    },[j])

    return (
        <div className={`labels ${dmode && "neighbour-dark"}`}>
            <Link className={dmode && "a-dark"} to={`/${cname}`}>
            <h5>{cname}</h5>
            </Link>
        </div>
    )
}

export default BorderCountries