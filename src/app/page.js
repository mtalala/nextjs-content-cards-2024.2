import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return (
      <div className={styles.container}>

        <div className={styles.card}>

          <div className={styles.data}>
            <time>21.10.2024</time> 
            - Notícia
          </div>

          <h1 className={styles.title}>Title</h1>

          <div className={styles.preview}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan. Fusce dapibus augue id magna congue, in mattis velit facilisis.</p>
          </div>

          <div className={styles.tags}>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
          </div>

        </div>
      
        <div className={styles.card}>

          <div className={styles.data}>
            <time>21.10.2024</time> 
            - Notícia
          </div>

          <h1 className={styles.title}>Title</h1>

          <div className={styles.preview}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan. Fusce dapibus augue id magna congue, in mattis velit facilisis.</p>
          </div>

          <div className={styles.tags}>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
          </div>
          
        </div>

        <div className={styles.card}>

          <div className={styles.data}>
            <time>21.10.2024</time> 
            - Notícia
          </div>

          <h1 className={styles.title}>Title</h1>

          <div className={styles.preview}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit orci, laoreet eget sapien nec, ullamcorper molestie ante. Etiam quis mollis lectus. Nullam pulvinar dolor magna, ut hendrerit nisl facilisis vel. Sed lacinia orci vel nunc sodales accumsan. Fusce dapibus augue id magna congue, in mattis velit facilisis.</p>
          </div>

          <div className={styles.tags}>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
            <p className={styles.tag}>Tag</p>
          </div>
          
        </div>

      
    </div>
  );
}