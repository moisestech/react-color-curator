import "./add-color-form.css";

// HOOKS
import { useInput } from "../../hooks/useInput";

// CONTEXT
import { useColors } from "../../context/ColorProvider";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  // abstraction from ColorContext
  const { addColor } = useColors();

  // debug props
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form className="color-form" onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input {...colorProps} type="color" required />
      <button>ADD</button>
    </form>
  );
}
