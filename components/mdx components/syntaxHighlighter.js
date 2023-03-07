import classNames from "classnames";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

function SyntaxHighlighter({ children, className }) {
  const code = children.props.children;

  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="my-2">
          <div className="bg-red-500">fdsf</div>
          <pre
            className={classNames(
              "overflow-auto p-4 text-xs rounded",
              className
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}

export default SyntaxHighlighter;
