const Card2 = ({ name, role, img, size = 96 }) => {
    return (
    <div className="card card2">
        <img
            className="profile-pic"
            style={{ width: size, height: size }}
            src={img}
            alt={name + " photo"}
        />
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
    );
};

export default Card2;