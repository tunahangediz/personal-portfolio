import classNames from "classnames";

function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "bg-gray-300/40 dark:bg-gray-200  p-2 rounded-md hover:border-red-600 hover:ring-2 hover:ring-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
