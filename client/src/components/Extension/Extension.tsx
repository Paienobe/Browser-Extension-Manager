import { ExtensionType } from "../../services/api";
import Button from "../Button/Button";
import Text from "../Text/Text";
import ToggleButton from "../ToggleButton/ToggleButton";

type ExtensionProps = {
  data: ExtensionType;
};

const Extension = ({ data }: ExtensionProps) => {
  const { name, logo, description, isActive, _id } = data;
  return (
    <section className="p-[1.25rem] bg-(--color-neutral-0) border border-(--color-neutral-200) rounded-(--radius-20) shadow h-[12.5rem] flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <img src={logo} className="block w-[3.75rem] h-[3.75rem]" alt="" />
        <div>
          <Text
            content={name}
            text_preset="text-preset-2"
            className="text-(--color-neutral-900)"
          />
          <Text
            content={description}
            text_preset="text-preset-5"
            className="text-(--color-neutral-600) mt-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-fit smooth-transition border-2 border-transparent rounded-(--radius-full) focus-within:border-(--color-red-700)">
          <Button
            text="Remove"
            textPreset="text-preset-6"
            className="bg-(--color-neutral-100) text-(--color-neutral-900) border border-(--color-neutral-300) shadow-none hover:bg-(--color-red-700) hover:text-(--color-neutral-0) focus:bg-(--color-neutral-100) focus:text-(--color-neutral-900) focus:border-2 focus:border-(--color-neutral-0)"
            clickFunction={() => {}}
          />
        </div>

        <div className="w-fit smooth-transition border-2 border-transparent rounded-(--radius-full) focus-within:border-(--color-red-700)">
          <ToggleButton
            isActive={isActive}
            extensionID={_id}
            clickFunction={() => {}}
          />
        </div>
      </div>
    </section>
  );
};

export default Extension;
