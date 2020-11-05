import "./star-rating.css";

// UTILS
import { createArray } from "../../utils/helpers";

// STAR
import Star from "./components/Star";

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <div className="star-rating">
      <div className="start-rating-container">
        {createArray(totalStars).map((n, i) => (
          <Star
            key={i}
            selected={selectedStars > i}
            onSelect={() => onRate(i + 1)}
          />
        ))}
      </div>

      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
