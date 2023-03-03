import classNames from "classnames";

export default function H1({ children, className }) {
  return (
    <h1
      className={classNames(
        "text-3xl relative right-1 font-semibold",
        className
      )}
    >
      {children}
    </h1>
  );
}
