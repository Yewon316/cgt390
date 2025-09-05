const Card = ({ title, children }) => {
    return (
    <section className="section">
        <div className="container">
            {title && <h2 className="section-title">{title}</h2>}
            <div className="cards">
            {children}
        </div>
        </div>
        </section>
    );
};

export default Card;
