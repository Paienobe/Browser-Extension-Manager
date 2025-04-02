import moon from "../../assets/moon-02.svg";
// import sun from "../../assets/Sunlight.svg";

const ThemeButton = () => {
  return (
    <button className="w-[3.125rem] h-[3.125rem] rounded-(--radius-12) grid grid-cols-1 place-items-center bg-(--color-neutral-100) hover:bg-(--color-neutral-300) smooth-transition cursor-pointer">
      <img src={moon} />
    </button>
  );
};

export default ThemeButton;
