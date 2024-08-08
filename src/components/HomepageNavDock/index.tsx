import React from "react";
import styles from './styles.module.css';

const items: NavDock[] = [
  {
    title: "About me",
    description: "All about me.",
    link: "/about",
  },
  {
    title: "CV",
    description: "My resume.",
    link: "/cv",
  },
  {
    title: "Flow",
    description: "My project history.",
    link: "/projects",
  },
];

function NavDock(item: NavDock) {
  return (
    <a href={item.link}>
      <div className={styles.item}>
        <div className={styles.flex}>
          {item.title}
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  );
}

export default function HomepageNavDock(): JSX.Element {
  return (
    <section className={styles.items}>
      <div className="container mx-auto">
        {items.map((item, index) => (
          <NavDock key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

interface NavDock {
  title: string;
  description: string;
  link: string;
}