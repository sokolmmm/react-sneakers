import './App.css';
import React from 'react';

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: 'none' }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-20">
            Кошик
            <img
              className="remuveBtn cu-p"
              width={32}
              height={32}
              src="img/btn-remuve.svg"
              alt="remuve"
            />
          </h2>
          <div className="cartItems">
            <div className="cartItem d-flex align-center ">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="mr-10">
                <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>2999 грн</b>
              </div>
              <img
                className="remuveBtn"
                width={32}
                height={32}
                src="img/btn-remuve.svg"
                alt="remuve"
              />
            </div>
            <div className="cartItem d-flex align-center ">
              <img
                className="mr-20"
                width={70}
                height={70}
                src="img/sneakers/1.jpg"
                alt="Sneakers"
              />
              <div className="mr-10">
                <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                <b>2999 грн</b>
              </div>
              <img
                className="remuveBtn"
                width={32}
                height={32}
                src="img/btn-remuve.svg"
                alt="remuve"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Загалом:</span>
                <div />
                <b>10000 грн</b>
              </li>
              <li>
                <span>Податок 5%:</span>
                <div />
                <b>500 грн</b>
              </li>
            </ul>
            <button className="greenButton" type="button">
              Оформити замовлення
              <img width={14} height={12} src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase"> React Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="" />
            <span className="ml-10"> 2000 грн</span>
          </li>
          <li className="mr-30">
            <img width={18} height={18} src="/img/like.svg" alt="" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Усі кросівки</h1>
          <div className="searchBlock d-flex align-center">
            <img width={16} height={16} src="/img/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук" />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              className="img"
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>2999 грн</b>
              </div>
              <button type="button" className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              className="img"
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>2999 грн</b>
              </div>
              <button type="button" className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              className="img"
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>2999 грн</b>
              </div>
              <button type="button" className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              className="img"
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>2999 грн</b>
              </div>
              <button type="button" className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
