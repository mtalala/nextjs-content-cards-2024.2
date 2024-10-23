import styles from "./fog.module.css";

export default function FogPage() {
  return (
    <div>
      <h1 className={styles.h1fog}>Foguete dando ré? Entenda o novo lançamento de Elon Musk</h1>
      <p className={styles.parag}>A SpaceX, empresa do bilionário Elon Musk, alcançou um feito impressionante ao lançar e capturar de volta o primeiro estágio do foguete Starship.</p>
      <p className={styles.parag}>A nave não tripulada, de quase 400 pés (121 metros), foi lançada ao amanhecer. Sete minutos depois, o estágio inicial do foguete, com 71 metros, voltou à plataforma, como se estivesse "dando ré", sendo pego pelos enormes braços, apelidados de “chopsticks”. A captura bem-sucedida foi comemorada pela equipe da SpaceX.</p>
      <p className={styles.parag}>Este teste marca a tentativa mais ambiciosa da SpaceX até o momento. A empresa, liderada por Elon Musk, já havia realizado lançamentos anteriores do Starship, mas todos resultaram em destruição durante o voo ou no mar. Desta vez, a empresa ousou mais e conseguiu trazer o booster de volta à Terra, evitando que ele caísse no Golfo do México, como nas tentativas anteriores. A captura do booster foi possível após verificações em tempo real, garantindo que tanto o foguete quanto a torre estivessem em boas condições para realizar a ação.</p>
      <p className={styles.parag}>Enquanto isso, a parte superior do Starship continuou seu voo ao redor do mundo, com destino ao Oceano Índico, onde estava programado para realizar um pouso controlado e afundar com segurança. A missão completa deve durar pouco mais de uma hora.</p>
      <p className={styles.parag}>A SpaceX já vem recuperando os estágios iniciais dos foguetes Falcon 9 há nove anos, o que acelerou o ritmo dos lançamentos e economizou milhões para a empresa. Agora, Musk quer replicar esse sucesso com o Starship, o maior e mais poderoso foguete já construído, equipado com 33 motores. A NASA já encomendou dois Starships para levar astronautas à Lua nesta década, e a SpaceX planeja usar essa tecnologia para futuras missões à Lua e Marte.</p>
    </div>
  );
}