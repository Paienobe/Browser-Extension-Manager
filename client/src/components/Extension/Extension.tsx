import { useGlobalContext } from "../../context/global/GlobalContext";
import {
  deleteExtension,
  ExtensionType,
  updateExtension,
} from "../../services/api";
import Button from "../Button/Button";
import Text from "../Text/Text";
import ToggleButton from "../ToggleButton/ToggleButton";

type ExtensionProps = {
  data: ExtensionType;
};

const Extension = ({ data }: ExtensionProps) => {
  const { extensions, setExtensions } = useGlobalContext();
  const { name, logo, description, isActive, _id } = data;

  const handleDelete = () => {
    deleteExtension(_id).then(() => {
      const updatedExtensions = extensions.filter((extension) => {
        return extension._id !== _id;
      });
      setExtensions(updatedExtensions);
    });
  };

  const handleUpdate = () => {
    updateExtension(_id, { isActive: !isActive }).then((response) => {
      if (response) {
        const updatedExtensions = extensions.map((extension) => {
          if (extension._id === _id) {
            return response;
          } else {
            return extension;
          }
        });
        setExtensions(updatedExtensions);
      }
    });
  };

  return (
    <section className="p-[1.25rem] bg-(--color-neutral-0) dark:bg-(--color-neutral-800) border border-(--color-neutral-200) dark:border-(--color-neutral-600) rounded-(--radius-20) shadow h-[12.5rem] flex flex-col justify-between">
      <div className="flex items-start gap-4">
        <img src={logo} className="block w-[3.75rem] h-[3.75rem]" alt="" />
        <div>
          <Text
            content={name}
            text_preset="text-preset-2"
            className="text-(--color-neutral-900) dark:text-(--color-neutral-0)"
          />
          <Text
            content={description}
            text_preset="text-preset-5"
            className="text-(--color-neutral-600) dark:text-(--color-neutral-300) mt-2"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="w-fit smooth-transition border-2 border-transparent rounded-(--radius-full) active:border-(--color-red-700)">
          <Button
            text="Remove"
            textPreset="text-preset-6"
            className="bg-(--color-neutral-100) dark:bg-transparent text-(--color-neutral-900) dark:text-(--color-neutral-0) border border-(--color-neutral-300) dark:border-(--color-neutral-600) shadow-none hover:bg-(--color-red-700) hover:text-(--color-neutral-0) active:bg-(--color-neutral-100) active:text-(--color-neutral-900) active:border-2 active:border-(--color-neutral-0)"
            clickFunction={handleDelete}
          />
        </div>

        <div className="w-fit smooth-transition border-2 border-transparent rounded-(--radius-full) active:border-(--color-red-700)">
          <ToggleButton isActive={isActive} clickFunction={handleUpdate} />
        </div>
      </div>
    </section>
  );
};

export default Extension;
