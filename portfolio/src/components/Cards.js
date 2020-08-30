import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of my work below!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/2PlayPic.png'
              text='An interactive app that connects seemlessly with Spotify to allow you and your co-pilot to search and rate songs to collectivly add to a joint-playlist of your liking.'
              label='2Play'
              href="https://app-2play.herokuapp.com/"
            />
            <CardItem
              src='images/PortfolioImg.png'
              text='React based Portfolio with smooth transitions and coherent, clean, organized code. Featuring many of my talents and skills as a web developer.'
              label='Portfolio'
              href="linkforportfolio"
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ultrices placerat. Ut a est sed augue mattis dapibus a at felis. Nullam et felis.'
              label='Mystery'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ultrices placerat. Ut a est sed augue mattis dapibus a at felis. Nullam et felis.'
              label='Adventure'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat ultrices placerat. Ut a est sed augue mattis dapibus a at felis. Nullam et felis.'
              label='Adrenaline'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
