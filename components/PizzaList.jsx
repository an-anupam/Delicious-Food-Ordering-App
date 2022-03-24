import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST RESTAURANT IN YOUR TOWN</h1>
      <p className={styles.desc}>
      It’s not true that money can’t buy happiness. I mean, have you tried buying Foods from us? It’s the same thing!
      </p>
      <div className={styles.wrapper}>
         {pizzaList.map((pizza) => (
          
          <PizzaCard key={pizza._id} pizza={pizza}/>
           
         ))}
      </div>
    </div>
  );
};

export default PizzaList;


{/* const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
*/}