import { useState } from "react";
import styles from "./PetForm.module.css";

const PetForm = ({ onSubmit, type = "adoption", pet = null }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    experience: "",
    housingType: "",
    hasYard: "",
    otherPets: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const submissionData = {
        ...formData,
        formType: type,
        pet: pet
          ? { id: pet.id, name: pet.name, breed: pet.breed, image: pet.image }
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

  return (
    <form onSubmit={handleSubmit} className={styles.petForm}>
      <h2>
        {type === "adoption" ? "Adoption Application" : "Pet Surrender Form"}
      </h2>

      <div className={styles.formSection}>
        <h3>Personal Information</h3>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Housing Type *</label>
            <select
              name="housingType"
              value={formData.housingType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Address *</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>State *</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>ZIP Code *</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>Pet Experience & Environment</h3>
        <div className={styles.formGroup}>
          <label>Previous Pet Experience *</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Tell us about your experience with pets..."
            required
            rows={3}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label>Do you have a yard? *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="hasYard"
                  value="yes"
                  checked={formData.hasYard === "yes"}
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="hasYard"
                  value="no"
                  checked={formData.hasYard === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>
          <div className={styles.formGroup}>
            <label>Other pets in household? *</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="otherPets"
                  value="yes"
                  checked={formData.otherPets === "yes"}
                  onChange={handleChange}
                  required
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="otherPets"
                  value="no"
                  checked={formData.otherPets === "no"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>
            {type === "adoption"
              ? "Why do you want to adopt this pet? *"
              : "Why are you giving up this pet? *"}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={
              type === "adoption"
                ? "Tell us why you would be a good home..."
                : "Please explain the circumstances..."
            }
            required
            rows={4}
          />
        </div>
      </div>

      <button type="submit" disabled={loading} className={styles.submitButton}>
        {loading
          ? "Submitting..."
          : type === "adoption"
          ? "Submit Adoption Application"
          : "Submit Surrender Form"}
      </button>
    </form>
  );
};

export default PetForm;
