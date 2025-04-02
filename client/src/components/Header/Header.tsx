import logo from "../../assets/logo-88.svg";
import Text from "../Text/Text";
import ThemeButton from "../ThemeButton/ThemeButton";

const Header = () => {
  return (
    <header className="bg-(--color-neutral-0) border border-(--color-neutral-200) px-3 py-2 rounded-(--radius-10) shadow flex items-center justify-between lg:w-[73.125rem] mx-auto">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" />
        <Text
          content="Extensions"
          text_preset="logo-preset"
          className="text-(--color-neutral-900)"
        />
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
