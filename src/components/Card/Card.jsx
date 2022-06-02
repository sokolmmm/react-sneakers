/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Card.module.scss';

function Card({
  title, imageUrl, price, onPlus,
}) {
  const [isAdded, setIsAdded] = React.useState();

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ title, imageUrl, price });
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img className={styles.mainImg} width={133} height={112} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{price}</b>
        </div>
        <img
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-unchecked.svg'}
          alt="Plus"
          className={styles.button}
          onClick={onClickPlus}
        />
      </div>
    </div>
  );
}

export default Card;
