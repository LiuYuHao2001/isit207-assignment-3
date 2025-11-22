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
    console.log("Surrender form submitted:", formData);
    alert(`We'll contact you soon.`);
    navigate("/pets");
  };

  return (
    <div className={styles.adoptPage}>
      <div className={styles.header}>
        <h1>Surrender {pet?.name || "a Pet"}</h1>
        <p>Fill out the form below to start the surrender process</p>
      </div>

      <PetForm onSubmit={handleFormSubmit} type="surrender" pet={pet} />
    </div>
  );
};

export default Adopt;
