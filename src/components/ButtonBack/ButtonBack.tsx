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
    <button onClick={handleClickPrev} className="w-fit bg-[aqua] px-10 py-2 rounded-lg self-center">
      Назад
    </button>
  );
};

export default ButtonBack;
