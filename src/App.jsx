import "./App.css";
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className="flex bg-red-600  items-center gap-4 flex-col min-h-screen">
      <h1 className="bg-white w-10/12 mt-10 text-center py-2 font-medium text-3xl rounded-lg">RANDOM GIFS</h1>
      <Random/>
      <Tag/>
    </div>
  );
}

export default App;
