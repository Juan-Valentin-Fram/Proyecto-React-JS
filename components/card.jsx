function Card({ titulo, children }) {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px' }}>
            <h3>{titulo}</h3>
            <div className="card-content">
                {children} { }
            </div>
        </div>
    );
}

export default Card;