import styles from "./HomeScreen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.welcomeText}>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <strong>space</strong>
        <p className={styles.description}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={styles.exploreZone}>
        <div>
          <strong>Explore</strong>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
