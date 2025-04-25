"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./CardRow.module.css";
import CardRowItem, { CardRowItemProps } from "./CardRowItem";

interface CardRowProps {
  cards: CardRowItemProps[];
}

const CardRow: React.FC<CardRowProps> = ({ cards }) => {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
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
    return () => {
      row?.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      {showLeftArrow && (
        <button
          className={`${styles.button} ${styles.leftArrow}`}
          onClick={() => scroll("left")}
        >
          <img src="/leftarrow.png" className={styles.arrow} alt="Scroll Left" />
        </button>
      )}
      <div className={styles.row} ref={rowRef}>
        {cards.map((card, index) => (
          <CardRowItem key={index} {...card} />
        ))}
      </div>
      {showRightArrow && (
        <button
          className={`${styles.button} ${styles.rightArrow}`}
          onClick={() => scroll("right")}
        >
          <img src="/rightarrow.png" className={styles.arrow} alt="Scroll Right" />
        </button>
      )}
    </div>
  );
};

export default CardRow;
