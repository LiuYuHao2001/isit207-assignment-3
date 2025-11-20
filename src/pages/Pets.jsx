import Resource from "../components/Resource";
import styles from "./Pets.module.css";

const Pets = ({ apiUrl, petType }) => {
  const render = (data) => {
    if (data.loading === true)
      return <p className={styles.loading}>Loading {petType}...</p>;

    console.log(`${petType} API fetched successfully: `, data);

    return (
      <div className={styles.container}>
        {data.trans.map((pet) => (
          <div key={pet.id} className={styles.card}>
            <img className={styles.image} src={pet.url} alt={petType} />
          </div>
        ))}
      </div>
    );
  };

  return <Resource path={apiUrl} render={render} />;
};

export default Pets;
