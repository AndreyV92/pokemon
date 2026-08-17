import { locationsRoute } from "@/routes/router";
import { useCanGoBack, useRouter } from "@tanstack/react-router";
import { Button } from "../ButtonBack/Button";
import styles from "../ButtonBack/ButtonBack.module.scss";

const Location = () => {
  const locations = locationsRoute.useLoaderData();

  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleClickPrev = () => {
    router.history.back();
  };

  console.log(locations);
  return (
    <div>
      <h1>Локации покемона</h1>

      {locations.map((location) => (
        <div key={location.location_area.name}>
          <h2>{location.location_area.name}</h2>
        </div>
      ))}

      {canGoBack ? (
        <Button onClick={handleClickPrev} className={styles.btnBack}>
          Назад
        </Button>
      ) : null}
    </div>
  );
};

export default Location;
