import React from "react";
import styles from "./About.module.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const About = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <section id="mission" className={styles.section}>
          <h2>Our Mission</h2>
          <p>
            Almost all process industries (Steel, Power, Glass, FMCG) lose
            approximately 25 million dollars per year on average production and
            operational losses due to bearing failures. Monitoring 24/7 and
            predictive maintenance results in no unplanned downtime, no sudden
            breakdown, and approximately 15% improvement in uptime and 30%
            reduction in spares inventory with root cause analysis and impending
            failures.
          </p>
        </section>

        <section id="audience" className={styles.section}>
          <h2>Target Audience</h2>
          <p>
            Industries with critical equipment and high downtime costs—such as
            manufacturing, healthcare, energy, and data centers—require reliable
            solutions to prevent operational disruptions, minimize financial
            losses, and protect valuable assets.
          </p>
        </section>

        <section id="model" className={styles.section}>
          <h2>Model Used</h2>
          <p>
            <strong>Random Forest:</strong> Highly imbalanced data with multiple
            failure types is very common for predictive maintenance-related
            classification problems.
          </p>
        </section>

        <section id="results" className={styles.section}>
          <h2>Results</h2>
          <p>The failure prediction model achieved 98% accuracy.</p>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2024 Girls Ka Tech Tadka</p>
        </footer>
      </div>
    </>
  );
};

export default About;
