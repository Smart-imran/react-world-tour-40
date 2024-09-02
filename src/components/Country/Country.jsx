import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';


const Country = ({ country, handleVisiteCountry, handleVisitedflags }) => {

    const { name, flags, population, cca3 } = country
    console.log(country)

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    // const handleVisited = () => handleVisiteCountry(country);

    //console.log(handleVisiteCountry);

    // const passWithParam = () =>{
    //     handleVisiteCountry(country);
    // }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'green' : 'red' }}>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <p><small>Code: {cca3} </small></p>
            <img src={flags.png} alt="" />
            <button onClick={() => handleVisiteCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedflags(country.flags.png)}>Add Flag</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {
                visited ? "I visited this country" : "I want to visit"
            }
            <hr />

            <CountryDetail               
                country = {country}
                handleVisiteCountry = {handleVisiteCountry}
                handleVisitedflags = {handleVisitedflags}

                ></CountryDetail>

        </div>
    );
};

export default Country;