import styles from "./alexa.module.css";

export default function AlexaPage() {
  return (
    <div>
      <h1 className={styles.h1alexa}>Paciente com ELA usa a mente para controlar Alexa após implante cerebral</h1>
      <p className={styles.parag}>Um homem de 64 anos com esclerose lateral amiotrófica (ELA) conseguiu controlar a assistente virtual Alexa usando o pensamento após passar por um implante cerebral de chip nos Estados Unidos.</p>
      <p className={styles.parag}>Identificado como Mark, o paciente que participou do estudo possui mobilidade limitada por causa da doença que leva à perda de controle muscular com o passar do tempo. Ele pode andar e falar, porém não apresenta os movimentos das mãos e dos braços, conforme a empresa rival da Neuralink.</p>
      <p className={styles.parag}>Depois de receber a interface cérebro-computador (BCI) da startup, o voluntário passou a ter capacidade de controlar os dispositivos inteligentes de sua residência sem depender de qualquer interação física ou mesmo da voz. Tudo é feito com a mente, por meio do recurso Tap to Alexa do seu tablet Amazon Fire.</p>
      <p className={styles.parag}>A tecnologia permite que Mark selecione blocos personalizados no dispositivo móvel para realizar ações pré-definidas da Alexa. Ele pode ligar e desligar as luzes, solicitar a reprodução de músicas e programas, ler livros no Kindle, realizar vídeochamadas, controlar eletrodomésticos conectados e fazer compras na Amazon, sem as mãos e sem a voz.</p>
      <p className={styles.parag}>Como é feito o implante cerebral?
      Como explicou a startup, o chip foi inserido em um vaso sanguíneo na superfície do cérebro do paciente através da veia jugular, por meio de um procedimento minimamente invasivo. Após a implantação, o BCI detecta e transmite intenções motoras para fora do cérebro, permitindo que as pessoas com paralisia voltem a controlar dispositivos sem as mãos.</p>
      <p className={styles.parag}>“Ser capaz de gerenciar aspectos importantes do meu ambiente e controlar o acesso ao entretenimento me devolve a independência que estou perdendo”, comemorou o paciente com ELA. Anteriormente, ele já “tocava” mentalmente ícones no iPhone, iPad e PC para navegar na internet e enviar e-mails.</p>
    </div>
  );
}