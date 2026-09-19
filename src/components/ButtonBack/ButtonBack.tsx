import { useCanGoBack, useRouter } from "@tanstack/react-router";
import type { ButtonBackProps } from "@/types/types";

const ButtonBack = ({ className = "" }: ButtonBackProps) => {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  const handleClickPrev = () => {
    router.history.back();
  };

  if (!canGoBack) return null;

  return (
    <button onClick={handleClickPrev} className={className}>
      ← Назад
    </button>
  );
};

export default ButtonBack;
