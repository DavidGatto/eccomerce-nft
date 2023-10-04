import { Sidebar } from "./components/layouts/Sidebar/Sidebar";
import { Navbar } from "./components/layouts/Navbar/Navbar";
import { Home } from "./components/pages/Home/Home";
import { ItemListContainer } from "./components/pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="relative">
      <div className="flex bg-indigo-300">
        <Sidebar />
        <div className="flex-1 bg-indigo-300">
          <Navbar />
          <Home />
          <ItemListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
