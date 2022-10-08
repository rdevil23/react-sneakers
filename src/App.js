import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
