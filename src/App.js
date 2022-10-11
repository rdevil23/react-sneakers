import React from 'react';
import Card from './components/Сard';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://634413ceb9ab4243cadec0f9.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
    }, []);

  const onAddToCart = (obj) => {
    setCartItems(obj) === obj ? obj = null : setCartItems((prev) => [...prev, obj]);
  }

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClickClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content">
        <div className="searchStr">
          <p className="textBlock">All sneakers</p>
          <div className="searchBlock">
          <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="sneakers">
          {items.map((item) => (
            <Card 
              title={item.title} 
              price={item.price} 
              imageUrl={item.imageUrl} 
              // onFavorite={obj.onFavorite}
              onAdd={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
