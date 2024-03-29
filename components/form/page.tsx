import React from "react";
import styles from "./page.module.css";
import { FaSearch, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

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
        <div className={styles.pickerWithIcon}>
          <FaBuilding className={styles.icon} />
          <select id="propertyType" className={styles.dropdown}>
            <option value="" disabled hidden>
              Select Property Type
            </option>
            <option value="PG">PG</option>
            <option value="Hostel">Hostel</option>
          </select>
        </div>
        <div className={styles.pickerWithIcon}>
          <FaMapMarkerAlt className={styles.icon} />
          <select id="city" className={styles.dropdown}>
            <option value="" disabled hidden>
              Select City
            </option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
        <Link className={styles.searchButton} href="/properties">
          <FaSearch />
          <span>Search</span>
        </Link>
      </div>
    </div>
  );
};

export default FormComponent;
