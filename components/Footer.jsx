import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.JPG" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WE WILL NOT LET YOU HUNGRY, AS WE CARE FOR YOU, WeDelicious.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            SAILASREE BIHAR, STREET ROAD
            <br /> BHUBANESWAR
            <br /> 9040- 111- 222
          </p>
          <p className={styles.text}>
            KHAOGALLI NAGAR, SOME
            <br /> BHUBANESWAR
            <br /> 9030- 111- 333
          </p>
          <p className={styles.text}>
            KHANDAGIRI SQUARE, ANOTHER
            <br /> BHUBANESWAR
            <br /> 9030- 222- 444
          </p>
          <p className={styles.text}>
             KIIT SQUARE, SOMETHING
            <br /> BHUBANESWAR
            <br /> 9040- 867- 101
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00AM – 11:00PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00AM – 12:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
