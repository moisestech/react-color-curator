import "./color-list.css";

// COMPONENTS
import Color from "../Color";

// CONTEXT
import { useColors } from "../../context/ColorProvider";

export default function ColorList() {
  // abstraction from ColorContext
  const { colors } = useColors();

  if (!colors.length) return <div>No Colors List. (Add a Color)</div>;

  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}
