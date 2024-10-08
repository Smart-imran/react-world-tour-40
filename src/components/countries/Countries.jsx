import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleVisiteCountry = (country) => {
        console.log("Add to this visited country");
        //console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }


    const handleVisitedflags = (flags) => {
        // console.log("Flag Adding")
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);

    }

    /* 
        remove item from an array in a state
        use filter to select all the element except the you want to remove
    */


    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            {/* visited countries */}
            <div>
                <h4>Visited Countries: {visitedCountries.length} </h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* Display Flags */}
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx}  src={flag}></img>)
                }
            </div>




            {/* Display Countries */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisiteCountry={handleVisiteCountry}
                        handleVisitedflags = {handleVisitedflags}
                        country={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;