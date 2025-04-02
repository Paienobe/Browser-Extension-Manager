import Button from "../Button/Button";
import Text from "../Text/Text";
import { useGlobalContext } from "../../context/global/GlobalContext";

const ListMenu = () => {
  const { selectedOption, setSelectedOption } = useGlobalContext();
  const options = ["All", "Active", "Inactive"];

  return (
    <section className="my-[2.5rem] flex flex-col items-center justify-center gap-y-[1.5rem] sm:flex-row sm:justify-between">
      <Text
        content="Extensions List"
        text_preset="text-preset-1"
        className="text-(--color-neutral-900)"
      />

      <div className="flex items-center gap-[0.75rem]">
        {options.map((option, index) => {
          const isSelected = index == selectedOption;
          return (
            <Button
              key={option}
              text={option}
              textPreset={isSelected ? "text-preset-4" : "text-preset-3"}
              className={
                isSelected
                  ? "bg-(--color-red-700) hover:bg-(--color-red-500) text-(--color-neutral-0)"
                  : "bg-white hover:opacity-70"
              }
              clickFunction={() => setSelectedOption(index)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ListMenu;
