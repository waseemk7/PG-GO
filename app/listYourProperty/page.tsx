"use client";
import React, { useState } from "react";
import RadioButton from "@/components/radioButton/page";
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
  rentType: string;
  roomType: string;
  sharingType: string[];
  pincode: string;
  deposit: string;
  wifi: string;
  [key: string]: string | string[] | File[];
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
    rentType: "",
    roomType: "",
    sharingType: [],
    pincode: "",
    deposit: "",
    wifi: "",
  });

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

  const [errors, setErrors] = useState<Partial<Property>>({});

  const [properties, setProperties] = useState<Property[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => {
      if (checked) {
        return {
          ...prevFormData,
          [name]: [...(prevFormData[name] as string[]), value],
        };
      } else {
        return {
          ...prevFormData,
          [name]: (prevFormData[name] as string[]).filter(
            (item) => item !== value
          ),
        };
      }
    });
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

    const formErrors: Partial<Property> = {};
    if (!formData.propertyName) {
      formErrors.propertyName = "Property Name is required";
    }
    if (!formData.description) {
      formErrors.description = "Description is required";
    }
    if (!formData.location) {
      formErrors.location = "Location is required";
    }
    if (!formData.rent) {
      formErrors.rent = "Rent is required";
    }
    if (!formData.propertyType) {
      formErrors.propertyType = "Propert type is required";
    }
    if (!formData.city) {
      formErrors.city = "City is required";
    }
    if (!formData.addressLine1) {
      formErrors.addressLine1 = "Address line is required";
    }
    if (!formData.landmark) {
      formErrors.landmark = "Landmark is required";
    }
    if (!formData.foodIncluded) {
      formErrors.foodIncluded = "Food included is required";
    }
    if (!formData.tenantType) {
      formErrors.tenantType = "Tenant type is required";
    }
    if (!formData.pointOfContact) {
      formErrors.pointOfContact = "Point of contact is required";
    }
    if (!formData.rentType) {
      formErrors.rentType = "Rent type is required";
    }
    if (!formData.roomType) {
      formErrors.roomType = "Room type is required";
    }
    if (!formData.pincode) {
      formErrors.pincode = "Pincode is required";
    }
    if (!formData.deposit) {
      formErrors.deposit = "Deposit is required";
    }
    if (!formData.wifi) {
      formErrors.wifi = "Wifi is required";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

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
      rentType: "",
      roomType: "",
      sharingType: [],
      pincode: "",
      deposit: "",
      wifi: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <label className={styles.label}>Property Name:</label>
              <input
                type="text"
                name="propertyName"
                value={formData.propertyName}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.propertyName && (
                <span className={styles.error}>{errors.propertyName}</span>
              )}

              <label className={styles.label}>Description:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.description && (
                <span className={styles.error}>{errors.description}</span>
              )}

              <label className={styles.label}>Location:</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.location && (
                <span className={styles.error}>{errors.location}</span>
              )}

              <label className={styles.label}>Rent:</label>
              <input
                type="text"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.rent && (
                <span className={styles.error}>{errors.rent}</span>
              )}

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
              {errors.propertyType && (
                <span className={styles.error}>{errors.propertyType}</span>
              )}

              <label className={styles.label}>City:</label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={styles.inputField}
              >
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.city && (
                <span className={styles.error}>{errors.city}</span>
              )}
            </div>
            <div className={styles.column}>
              <label className={styles.label}>Address Line 1:</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.addressLine1 && (
                <span className={styles.error}>{errors.addressLine1}</span>
              )}

              <label className={styles.label}>Landmark:</label>
              <input
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.landmark && (
                <span className={styles.error}>{errors.landmark}</span>
              )}

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
              {errors.foodIncluded && (
                <span className={styles.error}>{errors.foodIncluded}</span>
              )}

              <label className={styles.label}>Tenant Type:</label>
              <div className={styles.radioContainer}>
                <div>
                  <RadioButton
                    name="tenantType"
                    value="Girls"
                    checked={formData.tenantType === "Girls"}
                    onChange={handleChange}
                  />
                  <RadioButton
                    name="tenantType"
                    value="Boys"
                    checked={formData.tenantType === "Boys"}
                    onChange={handleChange}
                  />
                  <RadioButton
                    name="tenantType"
                    value="Girls/Boys"
                    checked={formData.tenantType === "Girls/Boys"}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.tenantType && (
                <span className={styles.error}>{errors.tenantType}</span>
              )}

              <label className={styles.label}>Point of Contact:</label>
              <input
                type="text"
                name="pointOfContact"
                value={formData.pointOfContact}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.pointOfContact && (
                <span className={styles.error}>{errors.pointOfContact}</span>
              )}

              <label className={styles.label}>Rent Type:</label>
              <div className={styles.radioContainer}>
                <div>
                  <RadioButton
                    name="rentType"
                    value="Monthly"
                    checked={formData.rentType === "Monthly/Boys"}
                    onChange={handleChange}
                  />
                  <RadioButton
                    name="rentType"
                    value="Daily"
                    checked={formData.rentType === "Daily"}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {errors.rentType && (
                <span className={styles.error}>{errors.rentType}</span>
              )}
            </div>
            <div className={styles.column}>
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
              {errors.roomType && (
                <span className={styles.error}>{errors.roomType}</span>
              )}
              <label className={styles.label}>Sharing Type:</label>
              <div>
                <input
                  type="checkbox"
                  name="sharingType"
                  value="1"
                  checked={formData.sharingType.includes("1")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>1</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="2"
                  checked={formData.sharingType.includes("2")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>2</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="3"
                  checked={formData.sharingType.includes("3")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>3</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="4"
                  checked={formData.sharingType.includes("4")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>4</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="5"
                  checked={formData.sharingType.includes("5")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>5</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="6"
                  checked={formData.sharingType.includes("6")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>6</label>

                <input
                  type="checkbox"
                  name="sharingType"
                  value="7"
                  checked={formData.sharingType.includes("7")}
                  onChange={handleChange}
                />
                <label style={{ color: "black", marginRight: "10px" }}>7</label>
              </div>

              <label className={styles.label}>Pincode:</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className={styles.inputField}
              />
              {errors.pincode && (
                <span className={styles.error}>{errors.pincode}</span>
              )}

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
              {errors.deposit && (
                <span className={styles.error}>{errors.deposit}</span>
              )}

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
              {errors.wifi && (
                <span className={styles.error}>{errors.wifi}</span>
              )}

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
          <div className={styles.otherAmenitiesContainer}>
            <label className={styles.label}>Other Amenities:</label>
            <div className={styles.checkboxContainer}>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Water Purify"
                  checked={formData.otherAmenities.includes("Water Purify")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Water Purify</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Hot Water"
                  checked={formData.otherAmenities.includes("Hot Water")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Hot Water</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Dish-TV"
                  checked={formData.otherAmenities.includes("Dish-TV")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Dish-TV</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Fridge"
                  checked={formData.otherAmenities.includes("Fridge")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Fridge</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="TV"
                  checked={formData.otherAmenities.includes("TV")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>TV</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Western Toilet"
                  checked={formData.otherAmenities.includes("Western Toilet")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Western Toilet</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Gas Stove"
                  checked={formData.otherAmenities.includes("Gas Stove")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Gas Stove</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Sofa"
                  checked={formData.otherAmenities.includes("Sofa")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Sofa</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="otherAmenities"
                  value="Washing Machine"
                  checked={formData.otherAmenities.includes("Washing Machine")}
                  onChange={handleCheckboxChange}
                />
                <label style={{ color: "black" }}>Washing Machine</label>
              </div>
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
