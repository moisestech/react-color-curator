import { createContext, useState, useContext } from "react";
import colorData from "../fixtures/color-data.json";
import { generateID } from "../utils/helpers";

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [colors, setColors] = useState(colorData);

  // immutably creates to color with title
  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: generateID(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  // immutably finds color id and updates rating
  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) =>
        color.id === id
          ? {
              ...color,
              rating,
            }
          : color
      )
    );
  };

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));

  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
