import React from "react";
import Cat from "../assets/cat.jpeg";
import Dog from "../assets/dog.jpeg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Adopt, Don't Shop</h1>
          <p className={styles.heroSubtitle}>
            Give a homeless pet their forever home. Hundreds of loving animals
            are waiting for a second chance at happiness.
          </p>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/path/to/cat-and-dog-together.jpg"
            alt="Happy cat and dog together waiting for adoption"
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
        <div className={styles.container}>
          <div className={styles.featuresHeader}>
            <h2>Why Adoption Makes Sense</h2>
            <p>
              Every adoption creates a happy ending for both pets and families
            </p>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>✅</span>
              </div>
              <div className={styles.featureContent}>
                <h3>Health Guarantee</h3>
                <p>
                  All rescues are certified to be spayed/neutered with
                  vaccinations up-to-date and complete health screenings.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>🐕</span>
              </div>
              <div className={styles.featureContent}>
                <h3>Lifetime Companion</h3>
                <p>
                  Find your family's new best friend today. Experience the
                  unconditional love only a rescue pet can provide.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>👨‍🏫</span>
              </div>
              <div className={styles.featureContent}>
                <h3>Professional Support</h3>
                <p>
                  First-time pet owners learn the ins-and-outs of caring and
                  being cared-for by an animal with our expert guidance.
                </p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIconWrapper}>
                <span className={styles.featureIcon}>🔍</span>
              </div>
              <div className={styles.featureContent}>
                <h3>Wider Search</h3>
                <p>
                  If you don't find your perfect match, we can refer you to
                  other trusted adoption centers in our network.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
