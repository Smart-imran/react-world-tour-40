import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    
    console.log(country)

    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    const {name, flags, population, cca3} = country
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'green' : 'red'}}>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <p><small>Code: {cca3} </small></p>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? "I visited this country" : "I want to visit"
            }
        </div>
    );
};

export default Country;