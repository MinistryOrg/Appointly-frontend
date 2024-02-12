import { useEffect } from "react";
import { useAdmin } from "../../contexts/AdminContext";

function Callout({ type, color, headline, paragraph, show, setShow }) {
  useEffect(() => {
    if (show) {
      // Perform any additional actions when show is true
      // For example, you can close the callout after a specific duration
      //   const timeoutId = setTimeout(() => {
      //     setShow(false);
      //   }, 5000); // Close the callout after 5 seconds

      // Cleanup the timeout to avoid memory leaks
      return () => {
        // clearTimeout(timeoutId);
      };
    }
  }, [show, setShow]);

  return (
    <div
      className={`my-5 mx-10 px-4 rounded-md border-l-4 border-${color}-500 bg-${color}-50 `}
    >
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 text-${color}-500`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {/* SVG path */}
            </svg>
          </div>
          <div className="self-center ml-3">
            <span className={`text-${color}-600 font-semibold`}>
              {headline}
            </span>
            <p className={`text-${color}-600 mt-1`}>{paragraph}</p>
          </div>
        </div>
        <button
          className={`self-start text-${color}-500`}
          onClick={() => setShow(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Callout;
