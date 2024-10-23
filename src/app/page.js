import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.alignall}>
      <div className={styles.align}>
        <Link href="/aida">
          <div className={styles.noticia}>
            <div className={styles.tag}><time>21.10.2024</time> - Notícia</div>
            <h1>Conheça Ai-Da</h1>
            <div className={styles.preview}>
              <p>A robô humanoide Ai-Da, que já foi detida no Egito sob suspeita de espionagem e fez história ao expor na Bienal de Veneza, será a primeira de sua “espécie” a ter uma obra vendida por uma casa de leilões renomada.</p>
            </div>
            <div className={styles.tags}>
              <h1>Veneza</h1>
              <h1>Bienal</h1>
              <h1>Arte</h1>
              <h1>Robô</h1>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.align}>
        <Link href="/foguete">
          <div className={styles.noticia}>
            <div className={styles.tag}><time>14.10.2024</time> - Notícia</div>
            <h1>Foguete dando ré?</h1>
            <div className={styles.preview}>
              <p>A SpaceX, empresa do bilionário Elon Musk, alcançou um feito impressionante ao lançar e capturar de volta o primeiro estágio do foguete Starship.</p>
            </div>
            <div className={styles.tags}>
              <h1>SpaceX</h1>
              <h1>Nave</h1>
              <h1>Starship</h1>
              <h1>Astronomia</h1>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.align}>
        <Link href="/alexa">
          <div className={styles.noticia}>
            <div className={styles.tag}><time>19.09.2024</time> - Notícia</div>
            <h1>Paciente usa a mente para controlar Alexa</h1>
            <div className={styles.preview}>
              <p>Um homem de 64 anos com esclerose lateral amiotrófica (ELA) conseguiu controlar a assistente virtual Alexa usando o pensamento após passar por um implante cerebral de chip nos Estados Unidos.</p>
            </div>
            <div className={styles.tags}>
              <h1>Alexa</h1>
              <h1>Neuralink</h1>
              <h1>Cérebro</h1>
              <h1>Paciente</h1>
            </div>
          </div>
        </Link>
      </div>

    </div>
  );
}