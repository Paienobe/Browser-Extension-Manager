import moon from "../../assets/moon-02.svg";
import { useGlobalContext } from "../../context/global/GlobalContext";
import sun from "../../assets/Settings Icon.svg";

const ThemeButton = () => {
  const { isDark, setIsDark } = useGlobalContext();
  return (
    <button
      className="w-[3.125rem] h-[3.125rem] rounded-(--radius-12) grid grid-cols-1 place-items-center bg-(--color-neutral-100) dark:bg-(--color-neutral-700) hover:bg-(--color-neutral-300) dark:hover:bg-(--color-neutral-600) smooth-transition cursor-pointer active:m-0.5"
      onClick={() => setIsDark(!isDark)}
    >
      <img src={isDark ? sun : moon} />
    </button>
  );
};

export default ThemeButton;
