import styles from '../styles/components/TechStack.module.css';
import techStack from "../data/stack.json";

export default function TechStack() {
  return (
    <section className={styles.stackSection}>
      <h2 className={styles.stackHeading}>Tech Stack</h2>
      {techStack.map((category, index) => (
        <article key={index} className={styles.categoryCard}>
          <h3 className={styles.categoryTitle}>{category.category}</h3>
          <article className={styles.stackCardSection}>
            {category.tech.map((tech, techIndex) => (
              <artcle key={techIndex} className={styles.stackCard}>
                <img
                 src={tech.img}
                 alt={tech.namn}
                 className={styles.techImg}></img>
              </artcle>
            ))}
          </article>
        </article>
      ))}
    </section>
  );
};