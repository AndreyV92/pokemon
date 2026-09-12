import { abilityRoute } from "@/routes/router";
import styles from "../ButtonBack/ButtonBack.module.scss";
import ButtonBack from "../ButtonBack/ButtonBack";
import { getAbility } from "./api";
import { useQuery } from "@tanstack/react-query";

function AbilityComponent() {
  const { abilityName } = abilityRoute.useParams();

  console.log(abilityName);

  const { data, error, isPending } = useQuery({
    queryKey: ["ability", abilityName],
    queryFn: () => getAbility(abilityName),
  });

  if(isPending) {
    return "Загрузка..."
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col px-8">
      <h1 className={styles.mb10}>Эффект способностей:</h1>
      <div>
        <ul className="mb-[20px]"> 
        {data &&
          data.effect_entries.map((effect) => (
            <li className="mb-[5px]" key={effect.effect}>
              <span>Эффект:</span> {effect.effect}
            </li>
          ))}
      </ul>
      </div>
      

      <ButtonBack />
    </div>
  );
}

export default AbilityComponent;
