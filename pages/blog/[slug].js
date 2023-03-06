import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export default function Post({ slug, frontmatter, code }) {
  //   console.log(code);
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const exampleCode = `
  (function someDemo() {
    var test = "Hello World!";
    console.log(test);
  })();
  
  return () => <App />;
  `;
  return (
    <div>
      <Component
        components={{
          pre: ({ children, className }) => {
            return (
              <SyntaxHighlighter className={className}>
                {children}
              </SyntaxHighlighter>
            );
          },
        }}
      />

      {/* <SyntaxHighlighter>{exampleCode}</SyntaxHighlighter> */}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { slug, frontmatter, code } = await getPostBySlug(params.slug);

  return {
    props: { slug, frontmatter, code },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostSlugs();

  return {
    paths,
    fallback: false,
  };
}
