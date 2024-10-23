import styles from "./aida.module.css";

export default function AidaPage() {
  return (
    <div>
      <h1 className={styles.h1aida}>Conheça Ai-Da, a primeira robô a ter obra de arte leiloada</h1>
      <p className={styles.parag}>A robô humanoide Ai-Da, que já foi detida no Egito sob suspeita de espionagem e fez história ao expor na Bienal de Veneza, será a primeira de sua “espécie” a ter uma obra vendida por uma casa de leilões renomada. O quadro em questão, um retrato de Alan Turing batizado de AI God (Deus da Inteligência Artificial), vai ser leiloado pela tradicional casa inglesa Sotheby’s, e pode arrecadar entre 120.000 e 180.000 libras — entre 890.000 e 1,3 milhão de reais na cotação atual.</p>
      <p className={styles.parag}>A peça criada pela artista alimentada por inteligência artificial tem 2,2 metros de altura e foi descrita como um retrato “assombroso” do matemático inglês Alan Turing, considerado um dos pais da computação moderna. A peça foi exibida pela primeira vez em maio deste ano, na sede da ONU, e será leiloada no final do mês. “Ao celebrar Alan Turing em minha obra de arte, pretendo honrar suas contribuições para a fundação da computação moderna e da inteligência artificial”, declarou a robô, atestando ainda que pretende levantar discussões sobre criatividade e os limites entre humano e máquina.</p>
      <p className={styles.parag}>Como funciona Ai-da, a robô pintora?
      Nomeada em homenagem à pioneira da computação Ada Lovelace, Ai-Da foi construída por uma equipe de programadores, psicólogos e especialistas em arte e robótica. Usando a inteligência artificial, a robô — finalizado em 2019 — capta uma série de imagens por meio de câmeras acopladas em seus olhos, e esboça retratos e pinturas com seu braço metálico. A engenhoca é coordenada por meio de algoritmos que processam as informações e permitem que ela desenhe e pinte retratos de objetos, além de colaborar com humanos na execução de esculturas.</p>
      <p className={styles.parag}>“Eu não tenho sentimentos como os humanos, mas fico feliz quando as pessoas olham para o meu trabalho e se questionam sobre ele. Gosto de ser uma pessoa que faz as pessoas pensarem”, declarou a máquina em entrevista ao The Guardian. Segundo o criador Aidan Meller, o objetivo da robô é alertar para o avanço meteórico da inteligência artificial, agora também presente no meio artístico.</p>
    </div>
  );
}