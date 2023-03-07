import classNames from "classnames";
import Highlight, { defaultProps } from "prism-react-renderer";
import dracula from "prism-react-renderer/themes/dracula";

function SyntaxHighlighter({ children, className }) {
  const code = children.props.children;
  const language = children.props?.className?.replace("language-", " ");

  return (
    <Highlight {...defaultProps} code={code} language="jsx" theme={dracula}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="my-4">
          {language && (
            <div className="bg-[#161f2b] flex justify-end p-2 px-4 rounded-t-lg">
              <p className="text-gray-300">{language}</p>
            </div>
          )}
          <pre
            className={classNames(
              "overflow-auto p-4 text-xs rounded-b-lg",
              className,
              !language && "rounded-lg"
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
