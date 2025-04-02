import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ExtensionType, getExtensions } from "../../services/api";

type GlobalContextType = {
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  extensions: ExtensionType[];
  setExtensions: React.Dispatch<React.SetStateAction<ExtensionType[]>>;
};

type ProviderProps = {
  children: ReactNode;
};

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: ProviderProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [extensions, setExtensions] = useState<ExtensionType[]>([]);

  useEffect(() => {
    getExtensions(selectedOption).then((result) => {
      if (result) {
        setExtensions(result);
      }
    });
  }, [selectedOption]);

  return (
    <GlobalContext.Provider
      value={{ selectedOption, setSelectedOption, extensions, setExtensions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
