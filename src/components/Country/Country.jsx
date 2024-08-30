import './Country.css'

const Country = ({country}) => {
    
    console.log(country)

    const {name, flags, population, cca3} = country
    return (
        <div className="country">
            <h3>Name: {name.common}</h3>
            <h3>Population: {population}</h3>
            <p><small>Code: {cca3} </small></p>
            <img src={flags.png} alt="" />
            <button>Visited</button>
        </div>
    );
};

export default Country;