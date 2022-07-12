import React, { useState, useEffect } from 'react'
import './Map.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useParams } from 'react-router-dom'
import BorderCountries from './BorderCountries'
import './BorderCountries.css'


function Country({ dmode }) {
    const [country, setCountry] = useState([])
    const { name } = useParams();

    // const url = `https://restcountries.eu/rest/v2/name/${name}?fullText=true`
     const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    useEffect(() => {
        const fetchData = async () => {
            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    setCountry(data)
                    console.log(data)
                })
        }
        fetchData()

    }, [name])

    return (


        <div>
            <Link to="/">
                <div className="Country">
                    <button className={`btn btn-light ${dmode && "dark-elem"}`}>
                        <ArrowBackIcon /> <p>Back</p>
                    </button>
                </div>
            </Link>

            {   country?.length > 0 ?
                country.map(i => (
                    <div key={i.numericCode}>
                        <div className="Country-details">
                            <div className='flag'>
                                <img src={i.flags.svg} className="img" key={i.numericCode} />
                            </div>

                            <div className='text'>
                                <h2 key={i.numericCode}>{i.name.common}</h2>
                                <div key={i.numericCode} className='page'>

                                    {/* <h3 >Native Name :<span>{i.nativeName}</span></h3> */}
                                    <h3 >Population :<span>{i.population}</span></h3>
                                    <h3 >Region :<span> {i.region}</span></h3>

                                    <h3>Sub Region :<span> {i.subregion}</span></h3>
                                    <h3>Capital :<span> {i.capital}</span></h3>

                                    {/* </div>
                                <div> */}
                                    <h3>Top Level Domain :<span>{i.tld[0]}</span></h3>
                                    <h3 >Currencies :<span> {i.currencies[Object.keys(i.currencies)[0]].name}</span></h3>
                                    <h3 >Languages :<span>
                                        <p className="coma">
                                                
                                            {Object.keys(i.languages).map((key) => 
                                                <span>{i.languages[key]}</span>
                                            )}
                                        </p>
                                    </span></h3>
                                </div>
                                {/* </div> */}
                                <div className="border">
                                    <div className="BorderCountries">
                                     <h3>Border Countries :</h3>
                                        
                                        {
                                            i.borders ? i.borders.map((j) => (
                                                <BorderCountries j={j} dmode={dmode} />
                                            ))
                                            :
                                            (<h5> None</h5>)                
                                               
                                        }
                                    </div>
                                </div>

                            </div>

                        
                        </div>
                    

                    </div>
                    
                    
                    
                    ))
                    :
                    <div className="load"><h1>Loading...</h1></div>
                }
        </div>
    )
}

export default Country
