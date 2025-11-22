import { useLocation, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import PetForm from "../components/PetForm";
import styles from "./Adopt.module.css";

const Adopt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const pet = location.state?.pet;

  if (loading) {
    return <div>Loading...</div>;
  }

  // if not logged in, pass current location and redirect to login
  if (!user) {
    navigate("/login", { state: { from: location } });
    return null;
  }

  const handleFormSubmit = (formData) => {
    console.log("Adoption form submitted:", formData);
    alert(
      `Thank you for your adoption request for ${
        pet?.name || "this pet"
      }! We'll contact you soon.`
    );
    navigate("/");
  };

  return (
    <div className={styles.adoptPage}>
      <div className={styles.header}>
        <h1>Adopt {pet?.name || "a Pet"}</h1>
        <p>Fill out the form below to start the adoption process</p>
      </div>

      {pet && (
        <div className={styles.petInfo}>
          <img src={pet.image} alt={pet.name} className={styles.petImage} />
          <div className={styles.petDetails}>
            <h2>{pet.name}</h2>
            <p>{pet.breed}</p>
            <p className={styles.description}>{pet.description}</p>
          </div>
        </div>
      )}

      <PetForm onSubmit={handleFormSubmit} type="adoption" pet={pet} />
    </div>
  );
};

export default Adopt;
