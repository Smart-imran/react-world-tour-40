import CountryData from "../CountryData/CountryData";


const CountryDetail = (props) => {

    // const { country, handleVisiteCountry,handleVisitedflags } = props;
    return (
        <div>
            <h5>Country Detail:</h5>
            <hr />
          <CountryData {...props}>

          </CountryData>
        </div>
    );
};

export default CountryDetail;