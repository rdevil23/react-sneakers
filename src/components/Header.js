function Header(props) {
    return (
        <header>
            <div className="headerLeft">
            <img src="/img/logo.svg" alt="Logo" className="logo"/>
                <div>
                    <h3>React sneakers</h3>
                    <p>Favorite sneaker store</p>
                </div>
            </div>

            <ul className="headerRight">
            <li onClick={props.onClickCart}>
                <img width={18} height={18} src="/img/cart.svg" alt="cart"/>
                <span>200$</span>
            </li>
            <li>
                <img width={18} height={18} src="/img/user.svg" alt="user"/>
            </li>
            </ul>
        </header>
    );
}

export default Header;