import { useState } from "react";

const ExpandableText = ({
  text,
  maxChars,
}: {
  text: string;
  maxChars: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleText = () => {
    setExpanded(!expanded);
  };

  const displayedText = expanded ? text : text.slice(0, maxChars);

  return (
    <div>
      <p>
        {displayedText}
        {text.length > maxChars && !expanded && (
          <>
            {" ... "}
            <button className="text-gray-600" onClick={toggleText}>
              See More
            </button>
          </>
        )}
        {expanded && (
          <button className="ml-1 text-gray-600" onClick={toggleText}>
            See Less
          </button>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;
