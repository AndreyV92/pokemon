import { useCanGoBack, useRouter } from "@tanstack/react-router";
import styles from "../ButtonBack/ButtonBack.module.scss";

const ButtonBack = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleClickPrev = () => {
    router.history.back();
  };

  if (!canGoBack) return null;

  return (
    <button onClick={handleClickPrev} className={styles.btnBack}>
      Назад
    </button>
  );
};

export default ButtonBack;
