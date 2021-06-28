import KmToMile from "./components/KmToMile";
import SumCalculator from "./components/SumCalculator";
import ToDoApp from "./components/ToDoApp/ToDoApp";

const App = () => {

    const initialItems = ["Clean the house", "Go to supermarket", "Code"];

    return (
        <div>
            <KmToMile />
            <hr />
            <SumCalculator />
            <hr />
            <ToDoApp data={initialItems} />
        </div>
    );
}

export default App;
