"use client";

import { useState } from "react";
import styles from "./page.module.css";

import { FaWifi, FaBath, FaCouch, FaBed } from "react-icons/fa";

type Property = {
  id: number;
  image: string;
  title: string;
  description: string;
  contact: string;
  wifi: boolean;
  bathroom: number;
  furnished: boolean;
  charges: number;
  bedrooms: number;
};

const dummyProperties: Property[] = [
  {
    id: 1,
    image: "https://cdn.pixabay.com/photo/2014/08/08/21/05/bar-413709_1280.jpg",
    title: "Beautiful Villa 1",
    description: "A luxurious villa with stunning views",
    contact: "agent1@example.com",
    wifi: true,
    bathroom: 3,
    furnished: true,
    charges: 2000,
    bedrooms: 4,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2014/08/08/21/03/bedroom-413706_1280.jpg",
    title: "Luxurious Apartment",
    description: "A spacious apartment with modern amenities",
    contact: "agent2@example.com",
    wifi: true,
    bathroom: 2,
    furnished: false,
    charges: 1500,
    bedrooms: 2,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2013/09/16/19/20/beds-182964_1280.jpg",
    title: "Cozy Cottage",
    description: "A cozy cottage nestled in the countryside",
    contact: "agent3@example.com",
    wifi: false,
    bathroom: 1,
    furnished: true,
    charges: 800,
    bedrooms: 1,
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2013/09/16/19/21/beds-182965_1280.jpg",
    title: "Spacious Townhouse",
    description: "A spacious townhouse with a garden",
    contact: "agent4@example.com",
    wifi: true,
    bathroom: 2,
    furnished: true,
    charges: 1800,
    bedrooms: 3,
  },
  {
    id: 5,
    image: "https://cdn.pixabay.com/photo/2013/06/30/19/07/bed-142516_1280.jpg",
    title: "Seaside Retreat",
    description: "A charming retreat by the sea",
    contact: "agent5@example.com",
    wifi: true,
    bathroom: 2,
    furnished: false,
    charges: 2200,
    bedrooms: 3,
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg",
    title: "Rustic Cabin",
    description: "A rustic cabin surrounded by nature",
    contact: "agent6@example.com",
    wifi: false,
    bathroom: 1,
    furnished: false,
    charges: 500,
    bedrooms: 1,
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
    title: "Modern Loft",
    description: "A modern loft with city views",
    contact: "agent7@example.com",
    wifi: true,
    bathroom: 1,
    furnished: true,
    charges: 1200,
    bedrooms: 2,
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg",
    title: "Elegant Mansion",
    description: "An elegant mansion with a grand staircase",
    contact: "agent8@example.com",
    wifi: true,
    bathroom: 5,
    furnished: true,
    charges: 5000,
    bedrooms: 6,
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg",
    title: "Quaint Studio",
    description: "A quaint studio apartment in the city center",
    contact: "agent9@example.com",
    wifi: true,
    bathroom: 1,
    furnished: true,
    charges: 1000,
    bedrooms: 1,
  },
  {
    id: 10,
    image:
      "https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947_1280.jpg",
    title: "Mountain Chalet",
    description: "A cozy chalet in the mountains",
    contact: "agent10@example.com",
    wifi: true,
    bathroom: 2,
    furnished: true,
    charges: 2500,
    bedrooms: 3,
  },
];

const PropertiesPage: React.FC = () => {
  const [properties] = useState<Property[]>(dummyProperties);

  const handleContactAgent = (phoneNumber: string) => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  return (
    <div className={styles.container}>
      {properties.map((property) => (
        <div key={property.id} className={styles.propertyCard}>
          <div className={styles.leftContainer}>
            <div className={styles.imageContainer}>
              <img
                src={property.image}
                alt={property.title}
                className={styles.propertyImage}
              />
            </div>
            <h2 className={styles.title}>{property.title}</h2>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.hotelInfo}>
              <div className={styles.infoItem}>
                <FaBed /> {property.bedrooms} Bedrooms
              </div>
              <div className={styles.infoItem}>
                <FaBath /> {property.bathroom} Bathrooms
              </div>
              <div className={styles.infoItem}>
                <FaWifi /> WiFi: {property.wifi ? "Yes" : "No"}
              </div>
              <div className={styles.infoItem}>
                <FaCouch /> Furnished: {property.furnished ? "Yes" : "No"}
              </div>
              <div className={styles.infoItem}>
                <span>&#8377;</span> Charges: ₹{property.charges}/month
              </div>{" "}
              {/* Changed to INR */}
            </div>
            <button
              className={styles.contactButton}
              onClick={() => handleContactAgent("9604491933")}
            >
              Contact Agent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesPage;
