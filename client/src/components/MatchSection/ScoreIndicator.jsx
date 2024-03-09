import PropTypes from "prop-types";

const ScoreIndicator = ({ score }) => {
  let colorClass = "";

  if (score >= 75) {
    colorClass = "text-[#5ad456]";
  } else if (score >= 50) {
    colorClass = "text-[#f6e05e]";
  } else if (score >= 25) {
    colorClass = "text-[#f6ad55]";
  } else {
    colorClass = "text-[#FB98FD]";
  }

  const calculateStrokeColor = (score) => {
    if (score >= 75) {
      return "#5ad456"; // Verde
    } else if (score >= 50) {
      return "#f6e05e"; // Amarillo
    } else if (score >= 25) {
      return "#f6ad55"; // Naranja
    } else {
      return "#FB98FD"; // Rosita de Tunematch
    }
  };

  const strokeColor = calculateStrokeColor(score);
  return (
    <div className="relative w-20 h-20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <svg
            className="w-full h-full"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff6a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle
              cx="12"
              cy="12"
              r="10"
              fill="none"
              stroke={strokeColor}
              strokeWidth="2"
              strokeDasharray={`${score}, 100`}
              transform="rotate(-90 12 12)"
            />
          </svg>
          <span className={`absolute text-2xl font-semibold ${colorClass}`}>
            {score}%
          </span>
        </div>
      </div>
    </div>
  );
};

ScoreIndicator.propTypes = {
  score: PropTypes.number,
};

export default ScoreIndicator;
