import React from "react";
import styles from "./page.module.css";

const FormComponent: React.FC = () => {
  const cities = [
    "Pune",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
  ];

  return (
    <div className={styles.formContainer}>
      <div className={styles.formRow}>
        <label htmlFor="propertyType" className={styles.label}>
          Property Type:
        </label>
        <select id="propertyType" className={styles.dropdown}>
          <option value="PG">PG</option>
          <option value="Hostel">Hostel</option>
        </select>
      </div>
      <div className={styles.formRow}>
        <label htmlFor="city" className={styles.label}>
          City:
        </label>
        <select id="city" className={styles.dropdown}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormComponent;
