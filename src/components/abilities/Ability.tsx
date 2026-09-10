import { abilityRoute } from "@/routes/router";
import styles from "../ButtonBack/ButtonBack.module.scss";
import ButtonBack from "../ButtonBack/ButtonBack";
import { getAbility } from "./api";
import { useQuery } from "@tanstack/react-query";

function AbilityComponent() {
  const { abilityName } = abilityRoute.useParams();

  console.log(abilityName);

  const { data, error, isPending } = useQuery({
    queryKey: ["ability", "abilityName"],
    queryFn: () => getAbility(abilityName),
  });

  if(isPending) {
    return "Загрузка..."
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h1 className={styles.mb10}>Эффект способностей:</h1>
      <ul className={styles.mb10}>
        {data &&
          data.effect_entries.map((effect) => (
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
