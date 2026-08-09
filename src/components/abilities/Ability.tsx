import { Link } from "@tanstack/react-router";
import { abilityRoute } from "@/routes/router";
import styles from "./Ability.module.scss";

function AbilityComponent() {
  const ability = abilityRoute.useLoaderData();
  console.log(ability);

  return (
    <>
      <h1 className={styles.mb10}>Эффект способностей:</h1>
      <ul className={styles.mb10}>
        {ability &&
          ability.effect_entries.map((effect) => (
            <li className={styles.mb5} key={effect.id}>
              <span>Эффект:</span> {effect.effect}
            </li>
          ))}
      </ul>

      <button>
        <Link to={"/"}>На главную</Link>
      </button>
    </>
  );
}

export default AbilityComponent;
