import React from "react";
import "./Home.css";
import amazonHomepageBackground from "../../assets/amazonHomepageBackground.jpg";
import Product from "../Product/Product";
import product_1 from "../../assets/product_1.jpg";
import product_2 from "../../assets/product_2.webp";
import product_3 from "../../assets/product_3.jpg";
import product_4 from "../../assets/product_4.jpg";
import product_5 from "../../assets/product_5.jpg";
import product_6 from "../../assets/product_6.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__Image" src={amazonHomepageBackground} alt="" />
        <div className="home__row">
        <Product title={
              "Noise Pulse Go Buzz Bluetooth Calling Smart Watch, 1.69 Clear Display, 550Nits,150+ Watch face, Comfort Strap, Heart Rate"
            }
            price={33.05}
            rating={5}
            image={product_6}/>
          
          <Product
            title={
              "Acer Nitro 5 Gaming Laptop Intel Core i5-11400H 11th Gen Processor"
            }
            price={450.22}
            rating={4}
            image={product_2}
          />
        </div>
        <div className="home__row">
          <Product
            title={
              "iQOO Z6 Pro 5G by vivo (Legion Sky, 6GB RAM, 128GB Storage) | Snapdragon 778G 5G "
            }
            price={102.22}
            rating={3}
            image={product_3}
          />
          <Product
            title={
              "Probus Traveller Business Laptop Sleeve Sling Bag with Shoulder Strap for 13.3/15.6 inch Laptop "
            }
            price={95.22}
            rating={5}
            image={product_4}
          />
          <Product
            title={
              "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships"
            }
            price={33.05}
            rating={4}
            image={product_5}
          />
        </div>
        <div className="home__row">
        <Product
            title={"Sparx Mens Sx0414g_spx Running Shoes"}
            price={22.22}
            rating={4}
            image={product_1}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
