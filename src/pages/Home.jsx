import { Link } from "react-router-dom";
import Card from "../components/Card";
import Grid from "../components/Grid";
import catBackground from "../assets/cat.png";
import dogBackground from "../assets/dog.png";
import heroBackground from "../assets/heroBackground1.png";
import medicalIcon from "../assets/health.png";
import supportIcon from "../assets/support.png";
import searchIcon from "../assets/search.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Adopt, Don't Shop</h1>
          <p className={styles.heroSubtitle}>
            Meet your family's new best friend today.
          </p>
          <p className={styles.heroSubtitle}>
            Adopt a cat or dog today for free.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={heroBackground} alt="Hero Section Background" />
        </div>
      </section>

      <section className={styles.petSelectionSection}>
        <Link to="cats" className={styles.petPageButton}>
          <div className={styles.imageContainer}>
            <img
              src={catBackground}
              className={styles.petBackground}
              alt="Adopt a cat"
            />
            <div className={styles.overlay}></div>
          </div>
          <p className={styles.petText}>Adopt a cat</p>
        </Link>
        <Link to="dogs" className={styles.petPageButton}>
          <div className={styles.imageContainer}>
            <img
              src={dogBackground}
              className={styles.petBackground}
              alt="Adopt a dog"
            />
            <div className={styles.overlay}></div>
          </div>
          <p className={styles.petText}>Adopt a dog</p>
        </Link>
      </section>

      <section className={styles.featuresSection}>
        <div className={styles.featuresHeader}>
          <h2>Why Adopt From Us?</h2>
          <p>Give a loving animal the home they deserve.</p>
        </div>

        <Grid>
          <Card
            image={medicalIcon}
            title="Health Guarantee"
            description="All rescues are certified to be neutered, with up-to-date vaccinations and complete health screenings."
          />
          <Card
            image={supportIcon}
            title="Professional Support"
            description="First-time pet owners learn to care and be cared-for by an animal with our expert guidance."
          />
          <Card
            image={searchIcon}
            title="Wider Search"
            description="If you don't find your perfect match, we can refer you to other trusted adoption centers in our network."
          />
        </Grid>
      </section>
    </div>
  );
};

export default Home;
