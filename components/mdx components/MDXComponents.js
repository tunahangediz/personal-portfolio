const MDXComponents = {
  h1: (props) => <h1 {...props} className="text-3xl font-medium my-4" />,
  h2: (props) => <h2 {...props} className="text-2xl font-medium my-4" />,
  h3: (props) => <h2 {...props} className="text-xl font-medium my-4" />,
  h4: (props) => <h2 {...props} className="text-lg font-medium my-4" />,
  h5: (props) => <h2 {...props} className="text-medium font-medium my-4" />,
  h6: (props) => <h2 {...props} className="text-normal font-medium my-4" />,
  ul: (props) => <ul {...props} className="list-disc pl-8 my-4" />,
  li: (props) => <li {...props} />,

  p: (props) => <p {...props} className="" />,
};
export default MDXComponents;
