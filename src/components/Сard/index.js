import React from 'react';
import styles from './Card.module.scss';

function Card({ imageUrl, title, price, onFavorite, onAdd}) {
    const [ isAdded, setIsAdded ] = React.useState(false);

    const onClickAdd = () => {
        onAdd({ imageUrl, title, price });
        setIsAdded(!isAdded);
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="sneakers" />
            <p>{title}</p>
            <div className={styles.cardBottom}>
                <div className={styles.cardInfo}>
                    <span>Price: </span>
                    <strong>{price}$</strong>
                </div>
                {/* <button className={styles.button} > */}
                    <img className={styles.plus} onClick={onClickAdd} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"/>
                {/* </button> */}
            </div>
        </div>
    );
}

export default Card;