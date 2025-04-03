import "./App.css";
import Header from "./components/Header/Header";
import { GlobalContextProvider } from "./context/global/GlobalContext";
import HomePage from "./pages/Home/Home";

function App() {
  return (
    <main className="font-(family-name:--font-noto-sans) min-h-screen bg-gradient-to-b from-0% from-(--gradient-light-top) dark:from-(--gradient-dark-top) to-100% to-(--gradient-light-bottom) dark:to-(--gradient-dark-bottom) px-4 py-5 sm:px-8 sm:py-6">
      <GlobalContextProvider>
        <Header />
        <HomePage />
      </GlobalContextProvider>
    </main>
  );
}

export default App;
