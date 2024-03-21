"use client";
// listing.tsx
import React, { useState } from "react";
import styles from "./page.module.css";

interface Property {
  propertyName: string;
  description: string;
  location: string;
  rent: string;
  pictures: File[];
  propertyType: string;
  city: string;
  addressLine1: string;
  landmark: string;
  foodIncluded: string;
  tenantType: string;
  pointOfContact: string;
  otherAmenities: string[];
  rentType: string[];
  roomType: string;
  sharingType: string[];
  pincode: string;
  deposit: string;
  wifi: string;
}

const Listing: React.FC = () => {
  const [formData, setFormData] = useState<Property>({
    propertyName: "",
    description: "",
    location: "",
    rent: "",
    pictures: [] as File[],
    propertyType: "",
    city: "",
    addressLine1: "",
    landmark: "",
    foodIncluded: "",
    tenantType: "",
    pointOfContact: "",
    otherAmenities: [],
    rentType: [],
    roomType: "",
    sharingType: [],
    pincode: "",
    deposit: "",
    wifi: "",
  });

  const [properties, setProperties] = useState<Property[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
    setProperties([...properties, formData]);
    setFormData({
      propertyName: "",
      description: "",
      location: "",
      rent: "",
      pictures: [],
      propertyType: "",
      city: "",
      addressLine1: "",
      landmark: "",
      foodIncluded: "",
      tenantType: "",
      pointOfContact: "",
      otherAmenities: [],
      rentType: [],
      roomType: "",
      sharingType: [],
      pincode: "",
      deposit: "",
      wifi: "",
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1>List your PG Property</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.columns}>
            <div className={styles.column}>
              {/* First Column */}
              <label className={styles.label}>Property Name:</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
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

              <label className={styles.label}>Property Type:</label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select Property Type</option>
                <option value="Paying Guest">Paying Guest</option>
                <option value="Hostels">Hostels</option>
              </select>

              <label className={styles.label}>City:</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select City</option>
                {/* Add options for cities */}
              </select>
            </div>
            <div className={styles.column}>
              {/* Second Column */}
              <label className={styles.label}>Address Line 1:</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className={styles.inputField}
              />

              <label className={styles.label}>Landmark:</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className={styles.inputField}
              />

              <label className={styles.label}>Food Included:</label>
              <select
                name="foodIncluded"
                value={formData.foodIncluded}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select Food Included</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="NA">NA</option>
              </select>

              <label className={styles.label}>Tenant Type:</label>
              <div>
                <input
                  type="radio"
                  name="tenantType"
                  value="Girls"
                  checked={formData.tenantType === "Girls"}
                  onChange={handleChange}
                />
                <label>Girls</label>
                <input
                  type="radio"
                  name="tenantType"
                  value="Boys"
                  checked={formData.tenantType === "Boys"}
                  onChange={handleChange}
                />
                <label>Boys</label>
                <input
                  type="radio"
                  name="tenantType"
                  value="Girls/Boys"
                  checked={formData.tenantType === "Girls/Boys"}
                  onChange={handleChange}
                />
                <label>Girls/Boys</label>
              </div>

              <label className={styles.label}>Point of Contact:</label>
              <input
                type="text"
                name="pointOfContact"
                value={formData.pointOfContact}
                onChange={handleChange}
                className={styles.inputField}
              />

              <label className={styles.label}>Other Amenities:</label>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Water Purify"
                  checked={formData.otherAmenities.includes("Water Purify")}
                  onChange={handleChange}
                />
                <label>Water Purify</label>
                {/* Add other amenity checkboxes */}
              </div>

              <label className={styles.label}>Rent Type:</label>
              <div>
                <input
                  type="checkbox"
                  name="rentType"
                  value="Monthly"
                  checked={formData.rentType.includes("Monthly")}
                  onChange={handleChange}
                />
                <label>Monthly</label>
                {/* Add other rent type checkboxes */}
              </div>
            </div>
            <div className={styles.column}>
              {/* Third Column */}
              <label className={styles.label}>Room Type:</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select Room Type</option>
                <option value="AC">AC</option>
                <option value="Non AC">Non AC</option>
              </select>
              <label className={styles.label}>Sharing Type:</label>
              <div>
                <input
                  type="checkbox"
                  name="sharingType"
                  value="1"
                  checked={formData.sharingType.includes("1")}
                  onChange={handleChange}
                />
                <label>1</label>
                {/* Add other sharing type checkboxes */}
              </div>

              <label className={styles.label}>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={styles.inputField}
              />

              <label className={styles.label}>Deposit:</label>
              <select
                name="deposit"
                value={formData.deposit}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select Deposit</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
              </select>

              <label className={styles.label}>Wifi:</label>
              <select
                name="wifi"
                value={formData.wifi}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select Wifi</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>

              <label className={styles.label}>
                Upload Pictures (at least 5):
              </label>
              <input
                type="file"
                name="pictures"
                accept="image/*"
                multiple
                onChange={handlePictureChange}
                className={styles.inputField}
              />
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>

      {properties.map((property, index) => (
        <div key={index} className={styles.container}>
          <h2 className={styles.propertyTitle}>{property.propertyName}</h2>
          <p className={styles.propertyText}>
            Description: {property.description}
          </p>
          <p className={styles.propertyText}>Location: {property.location}</p>
          <p className={styles.propertyText}>Rent: {property.rent}</p>
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
