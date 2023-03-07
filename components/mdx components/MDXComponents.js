import { markdownTable } from "markdown-table";

const MDXComponents = {
  h1: (props) => <h1 {...props} className="text-3xl font-medium my-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-medium my-4" />,
  h3: (props) => <h2 {...props} className="text-xl font-medium my-4" />,
  h4: (props) => <h2 {...props} className="text-lg font-medium my-4" />,
  h5: (props) => <h2 {...props} className="text-medium font-medium my-4" />,
  h6: (props) => <h2 {...props} className="text-normal font-medium my-4" />,
  ul: (props) => <ul {...props} className="list-disc pl-6 my-4" />,
  ol: (props) => <ol {...props} className="list-decimal pl-6 my-4" />,
  hr: (props) => (
    <hr {...props} className="border-[#e8eafd] dark:border-[#3c448a] my-4" />
  ),

  del: (props) => (
    <del {...props} className="line-through">
      {props.children}
    </del>
  ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="text-lg italic dark:text-gray-400 flex my-1 "
    >
      “{props.children}”
    </blockquote>
  ),
  p: (props) => <p {...props} className="my-2" />,
  // em: (props) => <em {...props} className="my-2" />,
};

export default MDXComponents;
