


const CountryData = ({ country, handleVisiteCountry,handleVisitedflags }) => {

    console.log("Inside data",country,handleVisiteCountry,handleVisitedflags)
    return (
        <div>
            <p>CountryData: {country.name.common}</p>
           

        </div>
    );
};

export default CountryData;