import { useRouter, useCanGoBack } from "@tanstack/react-router";
import { abilityRoute } from "@/routes/router";
import { Button } from "@/components/ButtonBack/Button";
import styles from "./Ability.module.scss";

function AbilityComponent() {
  const ability = abilityRoute.useLoaderData();
  console.log(ability);

  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleClickPrev = () => {
    router.history.back();
  };

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

      {canGoBack ? (
        <Button onClick={handleClickPrev} className={styles.btnBack}>
          Назад
        </Button>
      ) : null}
    </>
  );
}

export default AbilityComponent;
