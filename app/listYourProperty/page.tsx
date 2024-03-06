"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

interface Property {
  title: string;
  description: string;
  location: string;
  rent: string;
  pictures: File[];
}

const Listing: React.FC = () => {
  const [formData, setFormData] = useState<Property>({
    title: "",
    description: "",
    location: "",
    rent: "",
    pictures: [] as File[],
  });

  const [properties, setProperties] = useState<Property[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const picturesArray: File[] = Array.from(files);
      setFormData({ ...formData, pictures: picturesArray });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Append current formData to properties
    setProperties([...properties, formData]);
    // Reset form data after submission
    setFormData({
      title: "",
      description: "",
      location: "",
      rent: "",
      pictures: [],
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>List your PG Property</h1>
        <form onSubmit={handleSubmit}>
          <label className={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.inputField}
          />

          <label className={styles.label}>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.inputField}
          />

          <label className={styles.label}>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className={styles.inputField}
          />

          <label className={styles.label}>Rent:</label>
          <input
            type="text"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            className={styles.inputField}
          />

          <label className={styles.label}>Upload Pictures (at least 5):</label>
          <input
            type="file"
            name="pictures"
            accept="image/*"
            multiple
            onChange={handlePictureChange}
            className={styles.inputField}
          />

          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {/* Render uploaded properties below the form */}
      {properties.map((property, index) => (
        <div key={index} className={styles.container}>
          <h2>{property.title}</h2>
          <p className={styles.propertyText}>{property.description}</p>
          <p className={styles.propertyText}>Location: {property.location}</p>
          <p className={styles.propertyText}>Rent: {property.rent}</p>
          {/* Render other property details */}
          <div>
            {property.pictures.map((picture, picIndex) => (
              <img
                key={picIndex}
                src={URL.createObjectURL(picture)}
                alt={`Property ${index} - Image ${picIndex}`}
                className={styles.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;
