function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <div className="cartHeader">
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                    <h2>Cart</h2>
                </div>

            <div className="items">
                <div className="cartItem">
                    <div style={{ backgroundImage: 'url(/sneakers/1.jpg)' }} className="cartItemImg"></div>
                    <div className="cartInfo">
                        <p>Nike Blazer Mid Suede</p>
                        <strong>130$</strong>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                </div>

                <div className="cartItem">
                    <div style={{ backgroundImage: 'url(/sneakers/2.jpg)' }} className="cartItemImg"></div>
                    <div className="cartInfo">
                        <p>Nike Air Max 270</p>
                        <strong>190$</strong>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                </div>
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