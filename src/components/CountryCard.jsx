function CountryCard({ country }) {
    return (
        <div className="card" style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
            <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} style={{ width: '100px' }} />
            <h3>{country.name.common}</h3>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
        </div>
    );
}

export default CountryCard;