import Resource from "../components/Resource";
import styles from "./Pets.module.css";

const Pets = ({ apiUrl, petType, apiKey }) => {
  // Add apiKey prop
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

    // Add safety check for data.trans
    if (!Array.isArray(data.trans)) {
      return (
        <div className={styles.error}>
          <p>Unexpected data format received from API</p>
          <p>Expected array but got: {typeof data.trans}</p>
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {data.trans.map((pet) => {
          const breedInfo = pet.breeds && pet.breeds[0];

          return (
            <div key={pet.id} className={styles.card}>
              <img
                className={styles.image}
                src={pet.url}
                alt={breedInfo ? breedInfo.name : petType}
              />
              <div className={styles.content}>
                <h3 className={styles.name}>
                  {breedInfo ? breedInfo.name : "Unknown Name"}
                </h3>
                <p className={styles.description}>
                  {breedInfo
                    ? breedInfo.description
                    : `A lovely ${petType} looking for a home`}
                </p>
                {breedInfo && breedInfo.temperament && (
                  <p className={styles.temperament}>
                    <strong>Personality:</strong> {breedInfo.temperament}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return <Resource path={apiUrl} render={render} apiKey={apiKey} />;
};

export default Pets;
