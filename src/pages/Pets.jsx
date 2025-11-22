import { useNavigate } from "react-router-dom";
import Resource from "../components/Resource";
import Card from "../components/Card";
import Grid from "../components/Grid";
import styles from "./Pets.module.css";

const Pets = ({ petType, apiUrl, apiKey }) => {
  const navigate = useNavigate();

  const handleAdoptClick = (pet) => {
    navigate("/adopt", {
      state: {
        pet: {
          id: pet.id,
          name: pet.breeds?.[0]?.name || "Unknown Breed",
          breed: pet.breeds?.[0]?.name || "Unknown Breed",
          description:
            pet.breeds?.[0]?.description || "No description available",
          image: pet.url,
        },
      },
    });
  };

  const render = (data) => {
    if (data.loading === true)
      return <p className={styles.loading}>Fetching {petType}...</p>;

    if (data.error) {
      return (
        <div className={styles.error}>
          <p>
            Error loading {petType}: {data.error}
          </p>
          <p>Please check your API key and try again.</p>
        </div>
      );
    }

    console.log(`${petType} API fetched successfully: `, data);

    if (!Array.isArray(data.trans)) {
      return (
        <div className={styles.error}>
          <p>Unexpected data format received from API</p>
          <p>Expected array but got: {typeof data.trans}</p>
        </div>
      );
    }

    return (
      <>
        <h1 className={styles.introduction}>A Fresh Start</h1>
        <p className={styles.introduction}>
          All our animals shed their names on arrival: their new name (and life)
          is up to you.
        </p>
        <Grid>
          {data.trans.map((pet) => {
            const breed =
              pet.breeds && pet.breeds.length > 0 ? pet.breeds[0] : null;

            return (
              <div key={pet.id} className={styles.card}>
                <Card
                  image={pet.url}
                  title={breed ? breed.name : "Unknown Breed"}
                  description={
                    breed.description ? breed.description : breed.temperament
                  }
                  buttonText="Adopt"
                  onButtonClick={() => handleAdoptClick(pet)}
                />
              </div>
            );
          })}
        </Grid>
      </>
    );
  };

  return <Resource path={apiUrl} render={render} apiKey={apiKey} />;
};

export default Pets;
