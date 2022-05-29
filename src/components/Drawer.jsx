import React from 'react';

function Drawer() {
  return (
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
            <img className="mr-20" width={70} height={70} src="img/sneakers/1.jpg" alt="Sneakers" />
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
            <img className="mr-20" width={70} height={70} src="img/sneakers/1.jpg" alt="Sneakers" />
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
  );
}

export default Drawer;
