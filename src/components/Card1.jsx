import styles from './Card1.module.css';

const Card1 = (props) => {
    const title = props.title;
    const body  = props.text;
    const img   = props.img;

    return (
        <div className={styles.card}>
            {img ? <img className={styles.img} src={img} alt={title} /> : null}
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.body}>{body}</p>
        </div>
    );
};
export default Card1;
