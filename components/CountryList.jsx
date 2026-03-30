import CountryCard from './CountryCard';

function CountryList({ countries }) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {countries.map((country) => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    );
}

export default CountryList;