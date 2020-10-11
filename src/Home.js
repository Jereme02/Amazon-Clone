import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2016/08/1100x700_banner.jpg?resize=696%2C380&ssl=1"
          alt="banner"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Amazon Echo (2nd Gen) - Powered by Dolby – White"
            price={5999}
            image="https://m.media-amazon.com/images/I/61UnzwX+4NL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Samsung Galaxy M51 (Electric Blue, 6GB RAM, 128GB Storage)"
            price={24999}
            image="https://images-na.ssl-images-amazon.com/images/I/710weRkP-nL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="1"
            title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
            price={14999}
            image="https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="1"
            title="Samsung 6.2 kg Fully-Automatic Top load Washing Machine (WA62M4100HY/TL, Imperial Silver)"
            price={11999}
            image="https://images-na.ssl-images-amazon.com/images/I/61JeJKWBWNL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"
            price={14999}
            image="https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="Centrino Men's 3345 Footwear"
            price={519}
            image="https://images-na.ssl-images-amazon.com/images/I/71fj3YjhqoL._UL1500_.jpg"
            rating={4}
          />
          <Product
            id="1"
            title="Acer Nitro VG270P IPS 27 inch Gaming Monitor - 1 MS - 144 Hz - Full HD Resolution (Black)"
            price={49999}
            image="https://images-na.ssl-images-amazon.com/images/I/61Vddza8BrL._SL1336_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Samsung 6.2 kg Fully-Automatic Top load Washing Machine (WA62M4100HY/TL, Imperial Silver)"
            price={11999}
            image="https://images-na.ssl-images-amazon.com/images/I/61JeJKWBWNL._SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
