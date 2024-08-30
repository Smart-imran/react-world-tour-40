import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    
    console.log(country)

    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(true)
    }

    const {name, flags, population, cca3} = country
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <p><small>Code: {cca3} </small></p>
            <img src={flags.png} alt="" />
            <button onClick={handleVisited}>Visited</button>
            {
                visited && "I d=visited this country"
            }
        </div>
    );
};

export default Country;