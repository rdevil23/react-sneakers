import styles from './Card.module.scss';

function Card(props) {
    const onClickButton = () => {
        alert(`${props.title} added to cart`);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="sneakers" />
            <p>{props.title}</p>
            <div className={styles.cardBottom}>
                <div className={styles.cardInfo}>
                    <span>Price: </span>
                    <strong>{props.price}$</strong>
                </div>
                <button className={styles.button} onClick={onClickButton}>
                    <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;