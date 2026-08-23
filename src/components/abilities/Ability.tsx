import { abilityRoute } from "@/routes/router";
import styles from "../ButtonBack/ButtonBack.module.scss";
import ButtonBack from "../ButtonBack/ButtonBack";

function AbilityComponent() {
  const ability = abilityRoute.useLoaderData();
  console.log(ability);

  return (
    <>
      <h1 className={styles.mb10}>Эффект способностей:</h1>
      <ul className={styles.mb10}>
        {ability &&
          ability.effect_entries.map((effect) => (
            <li className={styles.mb5} key={effect.effect}>
              <span>Эффект:</span> {effect.effect}
            </li>
          ))}
      </ul>

      <ButtonBack />
    </>
  );
}

export default AbilityComponent;
