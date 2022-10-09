import Card from './components/Сard';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Nike Blazer Mid Suede', price: 150, imageUrl: '/sneakers/1.jpg'},
  { title: 'Nike Air Max 270', price: 210, imageUrl: '/sneakers/2.jpg'},
  { title: 'Nike Kyrie 7', price: 180, imageUrl: '/sneakers/3.jpg'},
  { title: 'Nike Blazer Mid Suede', price: 150, imageUrl: '/sneakers/4.jpg'},
  { title: 'Nike Lebron XVIII Low', price: 220, imageUrl: '/sneakers/5.jpg'},
  { title: 'Under Armour Curry 8', price: 250, imageUrl: '/sneakers/6.jpg'},
  { title: 'Jordan Air Jordan 11', price: 170, imageUrl: '/sneakers/7.jpg'},
  { title: 'Nike Lebron XVIII', price: 270, imageUrl: '/sneakers/8.jpg'},
  { title: 'Nike Kyrie Flytrap IV', price: 180, imageUrl: '/sneakers/9.jpg'},
  { title: 'Puma x Aka Boku Future Rider', price: 160, imageUrl: '/sneakers/10.jpg'},
];

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />

      <div className="content">
        <div className="searchStr">
          <p className="textBlock">All sneakers</p>
          <div className="searchBlock">
          <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..."/>
          </div>
        </div>
        <div className="sneakers">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
