"use client";

import styles from "./CardRow.module.css";

export interface CardRowItemProps {
  date: string;
  title: string;
  author: string;
  tags: string[];
  link: string;
}

const CardRowItem: React.FC<CardRowItemProps> = ({ date, title, author, tags }) => {

  return (
    <div className={styles.card}>
      <div className={styles.data}>
        <strong>Archives</strong> <time>{date}</time>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.author}>
        <img src="/images/mtalala.JPG" className={styles.img}/>
        <h1 className={styles.info}>{author}</h1>
      </div>
      <div className={styles.tags}>
        {tags.map((tag, tagIndex) => (
          <p key={tagIndex} className={styles.tag}>{tag}</p>
        ))}
      </div>
    </div>
  );
};

export default CardRowItem;
