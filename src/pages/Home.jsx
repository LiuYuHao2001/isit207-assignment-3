import Cat from "../assets/cat.jpeg";
import Dog from "../assets/dog.jpeg";
import styles from "./Home.module.css";
import Card from "../components/Card";
import { Link } from "react-router-dom";

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
          <img
            src="../src/assets/heroBackground1.jpg"
            alt="Hero Section Background"
          />
        </div>
      </section>

      <section className={styles.petSelectionSection}>
        <Link to="cats" className={styles.petPageButton}>
          <div className={styles.imageContainer}>
            <img src={Cat} className={styles.petBackground} alt="Adopt a cat" />
            <div className={styles.overlay}></div>
          </div>
          <p className={styles.petText}>Adopt a cat</p>
        </Link>
        <Link to="dogs" className={styles.petPageButton}>
          <div className={styles.imageContainer}>
            <img src={Dog} className={styles.petBackground} alt="Adopt a dog" />
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
        <div className={styles.featuresGrid}>
          <Card
            imageUrl={"../src/assets/medical.png"}
            title="Health Guarantee"
            description="All rescues are certified to be spayed/neutered, with up-to-date vaccinations and complete health screenings."
          />
          <Card
            imageUrl={"../src/assets/support.png"}
            title="Professional Support"
            description="First-time pet owners learn to care and be cared-for by an animal with our expert guidance."
          />
          <Card
            imageUrl={"../src/assets/magnifyingGlass.png"}
            title="Wider Search"
            description="If you don't find your perfect match, we can refer you to other trusted adoption centers in our network."
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
