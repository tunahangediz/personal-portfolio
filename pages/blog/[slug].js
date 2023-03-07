import MDXComponents from "@/components/mdx components/MDXComponents";
import syntaxHighlighter from "@/components/mdx components/syntaxHighlighter";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import H1 from "@/UI/H1";
import H2 from "@/UI/H2";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";

export default function Post({ slug, frontmatter, code }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mt-12">
      <Component
        components={{
          pre: syntaxHighlighter,
          ...MDXComponents,
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
