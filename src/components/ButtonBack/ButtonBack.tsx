import { useCanGoBack, useRouter } from "@tanstack/react-router";

const ButtonBack = () => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleClickPrev = () => {
    router.history.back();
  };

  if (!canGoBack) return null;

  return (
    <button onClick={handleClickPrev} className="mb-20 ">
      ← Назад!!!
    </button>
  );
};

export default ButtonBack;
