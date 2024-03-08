'use client'

import { useState } from 'react';
import styles from './page.module.css';

// Import icons as needed
import { FaWifi, FaBath, FaCouch, FaDollarSign, FaBed } from 'react-icons/fa';

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
    image: 'https://via.placeholder.com/300',
    title: 'Beautiful Villa 1',
    description: 'A luxurious villa with stunning views',
    contact: 'agent1@example.com',
    wifi: true,
    bathroom: 3,
    furnished: true,
    charges: 2000,
    bedrooms: 4,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    title: 'Luxurious Apartment 2',
    description: 'A spacious apartment with modern amenities',
    contact: 'agent2@example.com',
    wifi: true,
    bathroom: 2,
    furnished: false,
    charges: 1500,
    bedrooms: 2,
  },
  // Add more properties with additional details
];

const PropertiesPage: React.FC = () => {
  const [properties] = useState<Property[]>(dummyProperties);

  return (
    <div className={styles.container}>
      {properties.map(property => (
        <div key={property.id} className={styles.propertyCard}>
          <div className={styles.propertyImageContainer}>
            <img src={property.image} alt={property.title} className={styles.propertyImage} />
          </div>
          <div className={styles.propertyInfo}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <div className={styles.details}>
              <p><FaBed /> Bedrooms: {property.bedrooms}</p>
              <p><FaBath /> Bathrooms: {property.bathroom}</p>
              <p><FaWifi /> WiFi: {property.wifi ? 'Yes' : 'No'}</p>
              <p><FaCouch /> Furnished: {property.furnished ? 'Yes' : 'No'}</p>
              <p><FaDollarSign /> Charges: ${property.charges}/month</p>
              {/* Add more details as needed */}
            </div>
            <button className={styles.contactButton}>Contact Agent</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesPage;
