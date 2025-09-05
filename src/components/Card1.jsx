const Card1 = ({ name, role, img, featured }) => {
    return (
    <div className={`card${featured ? ' featured' : ''}`}>
        <img
        className="profile-pic"
        src={img}
        alt={name + " photo"}
        />
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
    );
};

export default Card1;
