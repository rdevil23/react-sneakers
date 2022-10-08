function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="unliked" />
            </div>
            <img width={133} height={112} src="/sneakers/1.jpg" alt="sneakers" />
            <p>Nike Blazer Mid Suede</p>
            <div className="cardBottom">
                <div className="cardInfo">
                    <span>Price: </span>
                    <strong>130$</strong>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;