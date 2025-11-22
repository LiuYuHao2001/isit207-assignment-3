import { useState } from "react";
import styles from "./PetForm.module.css";

const PetForm = ({ onSubmit, type = "adoption", pet = null }) => {
  const initialFormState = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    experience: "",
    housingType: "",
    hasYard: "",
    otherPets: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const submissionData = {
        ...formData,
        formType: type,
        pet: pet
          ? {
              id: pet.id,
              name: pet.name,
              breed: pet.breed,
              image: pet.image,
            }
          : null,
        submittedAt: new Date().toISOString(),
      };

      await onSubmit(submissionData);
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const isAdoption = type === "adoption";
  const formTitle = isAdoption ? "Adoption Application" : "Pet Surrender Form";
  const submitButtonText = loading
    ? "Submitting..."
    : isAdoption
    ? "Submit Adoption Application"
    : "Submit Surrender Form";

  return (
    <form onSubmit={handleSubmit} className={styles.petForm}>
      <h2>{formTitle}</h2>

      {/* Personal Information Section */}
      <div className={styles.formSection}>
        <h3>Personal Information</h3>

        <div className={styles.formGroup}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address *</label>
          <input
            id="address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="zipCode">ZIP Code *</label>
          <input
            id="zipCode"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Conditional Pet Experience Section */}
      {isAdoption && (
        <div className={styles.formSection}>
          <h3>Pet Experience & Environment</h3>

          <div className={styles.formGroup}>
            <label htmlFor="experience">Previous Pet Experience *</label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tell us about your experience with pets..."
              required
              rows={3}
            />
          </div>

          <div className={styles.formRow}>
            <RadioGroup
              label="Do you have a yard? *"
              name="hasYard"
              value={formData.hasYard}
              onChange={handleChange}
              options={["yes", "no"]}
            />

            <RadioGroup
              label="Other pets in household? *"
              name="otherPets"
              value={formData.otherPets}
              onChange={handleChange}
              options={["yes", "no"]}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              Why do you want to adopt this pet? *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us why you would be a good home..."
              required
              rows={4}
            />
          </div>
        </div>
      )}

      {/* Surrender Message Section */}
      {!isAdoption && (
        <div className={styles.formSection}>
          <h3>Surrender Details</h3>
          <div className={styles.formGroup}>
            <label htmlFor="surrenderMessage">
              Why are you giving up this pet? *
            </label>
            <textarea
              id="surrenderMessage"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please explain the circumstances..."
              required
              rows={4}
            />
          </div>
        </div>
      )}

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {submitButtonText}
      </button>
    </form>
  );
};

// Helper component for radio groups
const RadioGroup = ({ label, name, value, onChange, options }) => (
  <div className={styles.formGroup}>
    <label>{label}</label>
    <div className={styles.radioGroup}>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={value === option}
            onChange={onChange}
            required
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  </div>
);

export default PetForm;
