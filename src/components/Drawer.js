function Drawer({ onClickClose, items=[] }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className="cartHeader">
                    <img onClick={onClickClose} className="removeBtn" src="/img/btn-remove.svg" alt="close" />
                    <h2>Cart</h2>
                </div>

            <div className="items">
                {items.map((obj) => (
                    <div className="cartItem">
                        <div style={{ backgroundImage: `url(${obj.imageUrl})`}} className="cartItemImg"></div>
                        <div className="cartInfo">
                            <p>{obj.title}</p>
                            <strong>{obj.price}$</strong>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                    </div>
                ))}
            </div>

            <div className="totalBlock">
                <ul>
                <li>
                    <span>Subtotal:</span>
                    <div></div>
                    <strong>320$</strong>
                </li>
                <li>
                    <span>Discount:</span>
                    <div></div>
                    <strong>5%</strong>
                </li>
                <li>
                    <span>Discounted amount:</span>
                    <div></div>
                    <strong>304$</strong>
                </li>
                </ul>
                <button className="greenButton">Checkout <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>

        </div>
      </div>
    );
}

export default Drawer;