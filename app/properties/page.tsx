'use client'

import { useState } from 'react';
import styles from './page.module.css';

type Property = {
  id: number;
  image: string;
  title: string;
  description: string;
  contact: string;
};

const dummyProperties: Property[] = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Beautiful Villa 1',
    description: 'A luxurious villa with stunning views',
    contact: 'agent1@example.com',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Luxurious Apartment 2',
    description: 'A spacious apartment with modern amenities',
    contact: 'agent2@example.com',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Cozy Flat 3',
    description: 'A cozy flat in the heart of the city',
    contact: 'agent3@example.com',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Charming House 4',
    description: 'A charming house with a beautiful garden',
    contact: 'agent4@example.com',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Stylish Loft 5',
    description: 'A stylish loft with industrial design elements',
    contact: 'agent5@example.com',
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Modern Condo 6',
    description: 'A modern condo with panoramic views',
    contact: 'agent6@example.com',
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Spacious Penthouse 7',
    description: 'A spacious penthouse with luxury amenities',
    contact: 'agent7@example.com',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Rustic Cabin 8',
    description: 'A rustic cabin nestled in the woods',
    contact: 'agent8@example.com',
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Seaside Bungalow 9',
    description: 'A charming bungalow by the seaside',
    contact: 'agent9@example.com',
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/300', // Dummy image URL
    title: 'Mountain Retreat 10',
    description: 'A cozy retreat nestled in the mountains',
    contact: 'agent10@example.com',
  },
];

const PropertiesPage: React.FC = () => {
  const [properties] = useState<Property[]>(dummyProperties);

  return (
    <div className={styles.container}>
      {properties.map(property => (
        <div key={property.id} className={styles.propertyCard}>
          <img src={property.image} alt={property.title} className={styles.propertyImage} />
          <div className={styles.propertyDetails}>
            <h2>{property.title}</h2>
            <p>{property.description}</p>
            <button className={styles.contactButton}>Contact Agent</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertiesPage;
