"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Listing: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    rent: "",
    pictures: [] as File[],
  });

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
    // Handle form submission, e.g., send data to backend
    console.log(formData);
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
  );
};

export default Listing;
