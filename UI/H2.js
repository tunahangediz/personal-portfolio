import classNames from "classnames";

function H2({ children, className }) {
  return (
    <h2 className={classNames("text-[1.5rem] mb-2 font-semibold", className)}>
      {children}
    </h2>
  );
}

export default H2;
