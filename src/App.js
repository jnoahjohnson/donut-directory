import "./App.css";
import DonutList from "./components/DonutList";

function App() {
  return (
    <div>
      <header className="w-full text-center p-12">
        <h1 className="text-primary font-extrabold text-5xl uppercase pb-4">
          Doughnuts
        </h1>
        <h2 className="text-gray-600 font-light text-sm">
          Daily selection varies by shop
        </h2>
      </header>
      <main>
        <DonutList />
      </main>
    </div>
  );
}

export default App;
