import "./color.css";
import PropTypes from "prop-types";

// CONTEXT
import { useColors } from "../../context/ColorProvider";

// COMPONENTS
import StarRating from "../StarRating";

// ICONS
import { FaTrash } from "react-icons/fa";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();

  return (
    <section className="color">
      <div className="color-header">
        <h1>{title}</h1>
        <button className="color-delete" onClick={() => removeColor(id)}>
          <FaTrash />
        </button>
      </div>

      <div className="color-main" style={{ backgroundColor: color }} />

      <StarRating
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}

Color.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
