const Card1 = ({ title, text, featured }) => {
    return (
        <div className={`card${featured ? ' featured' : ''}`}>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
    );
};

    export default Card1;
