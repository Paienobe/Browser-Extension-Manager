import { useGlobalContext } from "../../context/global/GlobalContext";
import Extension from "../Extension/Extension";

const ExtensionList = () => {
  const { extensions } = useGlobalContext();
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {extensions.map((extension) => {
        return <Extension key={extension._id} data={extension} />;
      })}
    </div>
  );
};

export default ExtensionList;
