import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/teaser1/GW/2_Desktop-Hero1x_1500x600._CB404635813_.jpg"
        />

        <div className="home_row">
          <Product
            id="1"
            title="Noise ColorFit NAV Smart Watch with Built-in GPS and High Resolution Display (Camo Green)"
            price={4499}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61%2B6J7wk2%2BL._SL1500_.jpg"
            }
            rating={4}
          />
          <Product
            id="2"
            title="HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch FHD Gaming Laptop (8GB/1TB HDD/M.2 Slot/Windows 10/NVIDIA GTX 1650 4GB/Shadow Black), 15-dk0264TX"
            price={64990}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="3"
            title="MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adj...
MSI Optix MAG241C 23.6 inch Full HD Curved Gaming Monitor, 144hz Refresh Rate, 1ms Response time, Anti Glare Panel and Adjustable Stand"
            price={18299}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51sp9mu5FzL._SL1024_.jpg"
            }
            rating={5}
          />
          <Product
            id="4"
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={9770}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
            }
            rating={4}
          />
          <Product
            id="5"
            title="Logitech G 402 Hyperion Fury Wired Gaming Mouse, 4,000 DPI, Lightweight, 8 Programmable Buttons, Compatible with PC/Mac - Black"
            price={2335}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61W9GBylyqL._SL1500_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="6"
            title="Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model)"
            price={29990}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/71TJA%2BsJv2L._SL1500_.jpg"
            }
            rating={5}
          />
          <Product
            id="7"
            title="Corsair HS35 Stereo Gaming Headset - Headphones Designed for PC and Mobile – Red"
            price={3799}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/61kG30z4j8L._SL1333_.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
