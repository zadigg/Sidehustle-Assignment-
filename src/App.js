import EducationalXp from "./components/EducationalXp";
import General from "./components/General";
import PracticalXp from "./components/PracticalXp";
import "./index.css";

function App() {
  return (
    <div className=" h-[100vh] m-10 max-w-[1200px] mx-auto">
      <div className="bg-gray-200 h-[90vh] mx-6 lg:mx-0 ">
        <div>
          <General />
        </div>
        <div>
          <EducationalXp />
        </div>
        <div>
          <PracticalXp />
        </div>
      </div>
    </div>
  );
}

export default App;
