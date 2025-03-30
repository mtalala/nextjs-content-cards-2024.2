"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./CardRow.module.css";
import { useRouter } from "next/navigation";

const cards = [
  {
    date: "March 03, 2025",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    author: "Frank Doe",
    tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"],
    link: "/"
  },
  {
    date: "March 02, 2025",
    title: "Phasellus nibh tellus, vehicula non condimentum ut",
    author: "John Doe",
    tags: ["Tag A", "Tag B", "Tag C", "Tag D"],
    link: "/"
  },
  {
    date: "March 01, 2025",
    title: "Nullam mattis faucibus lectus, in volutpat",
    author: "Jane Doe",
    tags: ["Tag X", "Tag Y", "Tag Z", "Tag W"],
    link: "/"
  },
  {
    date: "February 28, 2025",
    title: "Aenean in odio non mi blandit vulputate",
    author: "Alice Doe",
    tags: ["Tag I", "Tag II", "Tag III", "Tag IV"],
    link: "/"
  },
  {
    date: "February 27, 2025",
    title: "Maecenas tincidunt placerat ante",
    author: "Michael Doe",
    tags: ["Tag C", "Tag D", "Tag E", "Tag F"],
    link: "/"
  }
];

const CardRow = () => {
  const rowRef = useRef(null);
  const router = useRouter();
  
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = 300;
      rowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const row = rowRef.current;
    if (row) {
      row.addEventListener("scroll", checkScroll);
      checkScroll();
    }
    return () => row?.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <div className={styles.container}>
      {showLeftArrow && (
        <button 
          style={{
            backgroundImage: "url('/leftarrow.png')",
            backgroundColor: "transparent"
          }}
          className={`${styles.arrow} ${styles.leftArrow}`}
          onClick={() => scroll("left")}
        />
      )}
      <div className={styles.row} ref={rowRef}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card} onClick={() => router.push(card.link)}>
            <div className={styles.data}>Archives&nbsp;&nbsp;<time>{card.date}</time></div>
            <p className={styles.title}>{card.title}</p>
            <div className={styles.author}>
              <h1 className={styles.info}>{card.author}</h1>
            </div>
            <div className={styles.tags}>
              {card.tags.map((tag, tagIndex) => (
                <p key={tagIndex} className={styles.tag}>{tag}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      {showRightArrow && (
        <button 
          style={{
            backgroundImage: "url('/rightarrow.png')",
            backgroundColor: "transparent"
          }}
          className={`${styles.arrow} ${styles.rightArrow}`}
          onClick={() => scroll("right")}
        />
      )}
    </div>
  );
};

export default CardRow;
