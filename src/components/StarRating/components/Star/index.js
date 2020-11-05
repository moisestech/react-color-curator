import PropTypes from "prop-types";

import { FaStar } from "react-icons/fa";

export default function Star({ selected = false, onSelect = (f) => f }) {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
}

Star.propTypes = {
  selected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
