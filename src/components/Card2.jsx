import styles from './Card2.module.css';

const Card2 = ({ name, role, img, size = 96 }) => {
    return (
        <div className={styles.card}>
            <img className={styles.profile} 
            style={{ width: size, height: size }} 
            src={img} 
            alt={name + " photo"} />
            
        <h3>{name}</h3>
        <p>{role}</p>
    </div>
    );
};

export default Card2;