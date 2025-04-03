type ToggleButtonProps = {
  isActive: boolean;
  extensionID: string;
  clickFunction: () => void;
};

const ToggleButton = ({
  isActive,
  extensionID,
  clickFunction,
}: ToggleButtonProps) => {
  return (
    <button
      className={`block cursor-pointer p-0.5 w-[2.25rem] rounded-(--radius-full) smooth-transition ${
        isActive
          ? "bg-(--color-red-700) hover:bg-(--color-red-500) active:bg-(--color-red-700) hover:text-(--color-neutral-0) active:border-2 active:border-(--color-neutral-0) dark:active:border-(--color-neutral-800)"
          : "bg-(--color-neutral-300)"
      }`}
      onClick={(e) => {
        e.preventDefault();
        clickFunction();
        console.log(extensionID);
      }}
    >
      <div
        className={`min-w-4 min-h-4 max-w-4 max-h-4 rounded-(--radius-full) bg-(--color-neutral-0) smooth-transition ${
          isActive ? "ml-auto" : "mr-auto"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
