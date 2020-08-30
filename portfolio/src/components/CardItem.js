import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label} onClick={() => window.open(props.href, "_blank")}>
            <img
              className='cards__item__img'
              alt='Alt Tag'
              src={props.src}
              href={props.href}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
