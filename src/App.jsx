import './App.css';
import React from 'react';
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpenned, setCartOpenned] = React.useState(false);
  const [cartItemsIsAdeed, setCartItemsIsAdeed] = React.useState(false);

  React.useEffect(() => {
    fetch('https://6298973fde3d7eea3c6b5faf.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (!cartItemsIsAdeed) {
      setCartItems((prev) => [...prev, obj]);
      setCartItemsIsAdeed(true);
    }
  };

  return (
    <div className="wrapper clear">
      {cartOpenned && <Drawer cartItems={cartItems} onClose={() => setCartOpenned(false)} />}
      <Header onClickCart={() => setCartOpenned(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі кросівки</h1>
          <div className="searchBlock d-flex align-center">
            <img width={16} height={16} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук" />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(product) => onAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
