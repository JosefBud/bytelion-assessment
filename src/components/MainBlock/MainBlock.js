import React from 'react';
import { useSelector } from 'react-redux';
import paneOneIcon from '../../media/pane-1-icon.png';
import paneTwoIcon from '../../media/pane-2-icon.png';
import paneThreeIcon from '../../media/pane-3-icon.png';

const MainBlock = () => {
  const username = useSelector(state => state.username);

  return (
    <div className='mainblock'>
      <div className='mainblock-greeting'>
        <h1>Hi {username ? username : 'User'}!</h1>
        <p>
          Color really isn't that difficult to get right, if you know where to
          start.
          <br />
          Learn by doing and you'll be a master in no time.
        </p>
      </div>
      <div className='mainblock-cards'>
        <div className='mainblock-cards-card blue'>
          <div className='mainblock-cards-card--icon'>
            <img src={paneOneIcon} />
          </div>
          <div className='mainblock-cards-card--header'>
            <h5>Blue</h5>
          </div>
          <div className='mainblock-cards-card--body'>
            <p>
              Blue is the color of the sky and sea. It is often associated with
              depth and stability. It symbolizes trust, loyalty, wisdom,
              confidence, intelligence, faith, truth, and heaven
            </p>
          </div>
        </div>
        <div className='mainblock-cards-card green'>
          <div className='mainblock-cards-card--icon'>
            <img src={paneTwoIcon} />
          </div>
          <div className='mainblock-cards-card--header'>
            <h5>Green</h5>
          </div>
          <div className='mainblock-cards-card--body'>
            <p>
              Green is the color of nature. It symbolizes growth, harmony,
              freshness, and fertility. Green has strong emotional
              correspondence with safety.
            </p>
          </div>
        </div>
        <div className='mainblock-cards-card red'>
          <div className='mainblock-cards-card--icon'>
            <img src={paneThreeIcon} />
          </div>
          <div className='mainblock-cards-card--header'>
            <h5>Red</h5>
          </div>
          <div className='mainblock-cards-card--body'>
            <p>
              Red is the color of fire and blood, so it is associated with
              energy, war, danger, strength, power, determination as well as
              passion, desire, and love.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
