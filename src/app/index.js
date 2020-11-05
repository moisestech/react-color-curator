import "./index.css";

// FIXTURES
import colorData from "../fixtures/color-data.json";
import ColorList from "../components/ColorList/";
import AddColorForm from "../components/AddColorForm";

// COMPONENTS

export default function App() {
  return (
    <div className="app">
      <AddColorForm />
      <ColorList />
    </div>
  );
}
