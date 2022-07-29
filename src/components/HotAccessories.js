import React from 'react';
import HotItemCard from './HotItemCard.js';
import '../styles/HotAccessories.css';

const HotAccessories = ({
  musicCover,
  music,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  mobileAccessories,
  mobileAccessoriesCover,
  lifestyle,
  lifestyleCover,
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifestyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        {lifestyle &&
          lifestyle.map((item, index) => (
            <HotItemCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}

        <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
      </div>
    </div>
  );
};

export default HotAccessories;
