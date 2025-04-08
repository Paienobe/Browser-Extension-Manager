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
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

type ProviderProps = {
  children: ReactNode;
};

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: ProviderProps) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [extensions, setExtensions] = useState<ExtensionType[]>([]);

  const storedTheme = localStorage.getItem("theme");
  const [isDark, setIsDark] = useState(storedTheme ? true : false);

  useEffect(() => {
    getExtensions(selectedOption).then((result) => {
      if (result) {
        setExtensions(result);
      }
    });
  }, [selectedOption]);

  useEffect(() => {
    const documentElement = document.documentElement;
    if (isDark) {
      documentElement?.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      documentElement?.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [isDark]);

  return (
    <GlobalContext.Provider
      value={{
        selectedOption,
        setSelectedOption,
        extensions,
        setExtensions,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
