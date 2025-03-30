import styles from "./CardColumn.module.css";

const cardsData = [
    {
      date: "21.10.2024",
      title: "Title 1",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan.",
      tags: ["Tag 1", "Tag 2", "Tag 3", "Tag 4"]
    },
    {
      date: "22.10.2024",
      title: "Title 2",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan.",
      tags: ["Tag A", "Tag B", "Tag C", "Tag D"]
    },
    {
      date: "23.10.2024",
      title: "Title 3",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan.",
      tags: ["Tag X", "Tag Y", "Tag Z", "Tag W"]
    }
];

const CardColumn = () => {
    return (
        <div className={styles.container}>
            {cardsData.map((card, index) => (
                <div key={index} className={styles.card}>
                <div className={styles.data}>
                    <time>{card.date}</time> - Card
                </div>

                <h1 className={styles.title}>{card.title}</h1>

                <div className={styles.preview}>
                    <p>{card.preview}</p>
                </div>

                <div className={styles.tags}>
                    {card.tags.map((tag, tagIndex) => (
                    <p key={tagIndex} className={styles.tag}>
                        {tag}
                    </p>
                    ))}
                </div>
                </div>
            ))}
        </div>
    );
}

export default CardColumn;