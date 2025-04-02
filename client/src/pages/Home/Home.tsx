import ExtensionList from "../../components/ExtensionList/ExtensionList";
import ListMenu from "../../components/ListMenu/ListMenu";

const HomePage = () => {
  return (
    <div className="lg:w-[73.125rem] mx-auto">
      <ListMenu />
      <ExtensionList />
    </div>
  );
};

export default HomePage;
