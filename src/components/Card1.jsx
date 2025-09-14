import styles from './Card1.module.css';

const Card1 = (props) => {
    const title = props.title;
    const body  = props.text;
    const img   = props.img;

    return (
    <div className={styles.card}>
        {img ? <img src={img} alt={title} style={{ width: 120, display: 'block' }} /> : null}
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
    );
};
export default Card1;
